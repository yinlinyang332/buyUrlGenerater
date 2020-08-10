import classList from './message/classList';
import engine from './message/engine';
import nodeType from './message/nodeType';
import region from './message/region';
import storageType from './message/storageType';
import version from './message/version';
import zoneId from './message/zoneId';
import { get } from 'lodash';

interface IOption {
    text: string;
    value: string;
}

const messagePart = [
    ...classList,
    ...engine,
    ...nodeType,
    ...region,
    ...storageType,
    ...version,
    ...zoneId,
].reduce((pre, current: IOption) => {
    const { text, value } = current;
    pre[value] = text;
    return pre;
}, {});

const message = {
    commodityCode: '付费类型',
    regionId: '地域',
    engine: '引擎',
    engineVersion: '版本',
    nodeType: '系列',
    dBInstanceStorageType: '存储类型',
    zoneId: '可用区',
    dBInstanceClass: '规格',
    dBInstanceStorage: '存储空间',
    duration: '购买时长',
    bards: '按量付费',
    rds: '包年包月',
    ...messagePart,
};

const intl = (key: string | number): string => {
    // @ts-ignore
    const name = decodeURIComponent(key);
    return get(message, [name]) || name;
};

intl.duration = (duration: number | string) => {
    const map = {
        1: '1 个月',
        2: '2 个月',
        3: '3 个月',
        4: '4 个月',
        5: '半年',
        6: '6 个月',
        7: '7 个月',
        8: '8 个月',
        9: '9 个月',
        10: '10 个月',
        11: '11 个月',
        12: '一年',
        24: '2年',
        36: '3年',
        48: '4年',
        60: '5年',
    };

    return map[duration] || duration;
};

export default intl;
