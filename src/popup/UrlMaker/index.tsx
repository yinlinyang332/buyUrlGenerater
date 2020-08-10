import React, { useState, useEffect } from 'react';
import { get, isUndefined, template } from 'lodash';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Checkbox, Button, Input } from 'antd';
import './index.scss';
import intl from './intl';

interface IQueryPrice {
    commodityCode?: string;
    orderType?: string;
    engine?: string;
    engineVersion?: number;
    regionId?: string;
    zoneId?: string;
    dBInstanceNetType?: string;
    dBInstanceClass?: string;
    dBInstanceStorage?: number;
    dBInstanceStorageType?: string;
    nodeType?: string;
    dBInstanceId?: string;
    autoPay?: string;
    resource?: string;
    zoneIdSlave1?: string;
    dispenseMode?: string;
    quantity?: string;
    promotionCode?: string;
    vpcId?: string;
    instanceUsedType?: string;
    upgradeMinorVersionPolicy?: string;
    aliyunLang?: string;
    secToken?: string;
    token?: string;
    collina?: string;
    channel?: string;
    usedTime?: number;
    timeType?: number;
}

type IEntries = string[];

interface IMap {
    [propName: string]: string;
}

interface IParam {
    key: string;
    value: string | number;
    checked: boolean;
}

type IParams = IParam[];

const getQuery = (url: string) => {
    if (!url) {
        return '';
    }
    const [host, query] = url.split('?');
    return query;
};

const serializable = (query: string): IQueryPrice => {
    const keyValues = query.split('&');
    const map: IMap = {};
    if (!query) {
        return map;
    }
    keyValues.forEach((item) => {
        const [key, value = '']: IEntries = item.split('=');
        map[key] = value;
    });

    return map;
};

interface IUnit {
    year: string;
    month: string;
}

const getDuration = (usedTime: number, timeType: keyof IUnit) => {
    const UNIT_MAP = {
        Year: 12,
        Month: 1,
    };

    const unit = UNIT_MAP[timeType] || 1;

    return usedTime * unit;
};

const pickSupportParam = (queryMap: IQueryPrice) => {
    const {
        commodityCode,
        engine,
        engineVersion,
        regionId,
        zoneId,
        dBInstanceClass,
        dBInstanceStorage,
        dBInstanceStorageType,
        nodeType,
        usedTime,
        timeType,
    } = queryMap;

    let duration;
    if (timeType && usedTime) {
        duration = getDuration(usedTime, timeType);
    }

    return {
        commodityCode,
        regionId,
        engine,
        engineVersion,
        nodeType,
        dBInstanceStorageType,
        zoneId,
        dBInstanceClass,
        dBInstanceStorage,
        duration,
    };
};

const mapToArray = (map: IQueryPrice) => {
    const array = [];
    for (const [key, value] of Object.entries(map)) {
        const temp = { key, value, checked: true };
        array.push(temp);
    }
    return array;
};

interface IEngine {
    MySQL: string;
    SQLServer: string;
    PostgreSQL: string;
    PPAS: string;
    MariaDB: string;
}

interface IEngineInfo {
    key: string;
    value: keyof IEngine;
    checked: boolean;
}

const getEngineName = (key: keyof IEngine): string => {
    const map = {
        MySQL: 'mysql',
        SQLServer: 'mssql',
        PostgreSQL: 'PostgreSQL',
        PPAS: 'PPAS',
        MariaDB: 'MariaDB',
    };

    return map[key] || key;
};

const getUrlName = (key: string) => {
    const map = {
        regionId: 'rds_region',
        engineVersion: 'rds_dbversion',
        nodeType: 'rds_nodetype',
        dBInstanceStorageType: 'rds_storagetype',
        zoneId: 'rds_iz',
        dBInstanceClass: 'rds_class',
        dBInstanceStorage: 'rds_storage',
        duration: 'rds_duration',
    };

    return map[key] || key;
};

const defaultHost = `https://rds-buy.aliyun.com`;
const reInterpolate = /%{([\S\s]+?)}/g;
const urlTemplate = '%{host}/nextBuy/#/create/%{commodityCode}/%{engine}?initData={"data":%{data}}';
const urlTemplateComiled = template(urlTemplate, {
    interpolate: reInterpolate,
});
export default function UrlMaker(): JSX.Element {
    const [host, setHost] = useState('');
    const [paramList, setParamList] = useState<IParams>([]);
    const [url, setUrl] = useState('');
    const [activeId, setActiveId] = useState('addd');
    console.log(activeId, 'activeId');

    useEffect(() => {
        const BACKGROUND_PAGE = chrome.extension.getBackgroundPage();
        console.log(BACKGROUND_PAGE);

        const queryPriceUrl = get(BACKGROUND_PAGE, 'queryPriceRequestInfo.url', '');
        const initiator = get(BACKGROUND_PAGE, 'queryPriceRequestInfo.initiator', defaultHost);
        const query = getQuery(queryPriceUrl);
        const queryMap = serializable(query);
        const supportParam = pickSupportParam(queryMap);
        setParamList(mapToArray(supportParam));
        setHost(initiator);
    }, []);

    const handleChange = (checked: boolean, key: string) => {
        const item = paramList.find((param) => param.key === key);
        if (item) {
            item.checked = checked;
        }
        setParamList([...paramList]);
    };

    useEffect(() => {
        const commodityCodeName = 'commodityCode';
        const engineName = 'engine';
        const hashKey = new Set([commodityCodeName, engineName]);
        const commodityCodeInfo = paramList.find((item) => item.key === commodityCodeName);
        const engineInfo = paramList.find((item) => item.key === engineName) as IEngineInfo;
        const data = paramList
            .filter((item) => !hashKey.has(item.key) && item.checked)
            .reduce((last, current) => {
                const { key, value } = current;
                // @ts-ignore
                const name = getUrlName(key);
                last[name] = value;
                return last;
            }, {});

        const href = urlTemplateComiled({
            host,
            commodityCode: commodityCodeInfo?.value,
            engine: getEngineName(engineInfo?.value),
            data: JSON.stringify(data),
        });
        setUrl(href);
    }, [paramList, host]);

    const handleActiveIdChange = (event) => {
        const value = get(event, 'target.value', '');
        console.log('onChange', value.trim(), value);
        setActiveId(value.trim());
    };

    return (
        <div className="popup-page">
            {paramList
                .filter((item) => !isUndefined(item.value))
                .map((item) => (
                    <div key={item.key} className="item">
                        <div className="item-label">
                            {/* <Checkbox
                                checked={item.checked}
                                onChange={(event) => handleChange(event.target.checked, item.key)}
                                className="item-label__checkbox"
                            /> */}
                            {intl(item.key)}:
                        </div>
                        <div className="item-content">
                            {item.key === 'duration' ? intl.duration(item.value) : intl(item.value)}
                            {item.key === 'dBInstanceStorage' ? 'GB' : ''}
                        </div>
                    </div>
                ))}
            <div className="item">
                <div className="item-label">活动Id：</div>
                <div className="item-content">
                    <Input value={activeId} allowClear onChange={handleActiveIdChange} />
                </div>
            </div>
            <div className="actions">
                <CopyToClipboard value={url}>
                    <Button type="primary" className="actions-item">
                        复制链接
                    </Button>
                </CopyToClipboard>

                <a href={url} target="_blank" rel="noopener noreferrer" className="actions-item">
                    <Button>测试</Button>
                </a>
            </div>
        </div>
    );
}
