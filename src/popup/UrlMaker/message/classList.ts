const classList = [
    {
        text: '2核4GB（单机基础版）',
        value: 'mysql.n2.medium.1',
    },
    {
        text: '1核1GB（单机基础版）',
        value: 'mysql.n1.micro.1',
    },
    {
        text: '1核2GB（单机基础版）',
        value: 'mysql.n2.small.1',
    },
    {
        text: '2核8GB（单机基础版）',
        value: 'mysql.n4.medium.1',
    },
    {
        text: '4核8GB（单机基础版）',
        value: 'mysql.n2.large.1',
    },
    {
        text: '4核16GB（单机基础版）',
        value: 'mysql.n4.large.1',
    },
    {
        text: '8核16GB（单机基础版）',
        value: 'mysql.n2.xlarge.1',
    },
    {
        text: '8核32GB（单机基础版）',
        value: 'mysql.n4.xlarge.1',
    },
    {
        text: '16核32GB（单机基础版）',
        value: 'mysql.n2.2xlarge.1',
    },
    {
        text: '16核64GB（单机基础版）',
        value: 'mysql.n4.2xlarge.1',
    },
    {
        text: '16核128GB（单机基础版）',
        value: 'mysql.n8.2xlarge.1',
    },
    {
        text: '32核128GB（单机基础版）',
        value: 'mysql.n4.4xlarge.1',
    },
    {
        text: '32核256GB（单机基础版）',
        value: 'mysql.n8.4xlarge.1',
    },
    {
        text: '56核224GB（单机基础版）',
        value: 'mysql.n4.8xlarge.1',
    },
    {
        text: '56核480GB（单机基础版）',
        value: 'mysql.n8.8xlarge.1',
    },
    {
        text: '8核16GB',
        value: 'rds.mysql.c1.large',
    },
    {
        text: '4核8GB',
        value: 'rds.mysql.s3.large',
    },
    {
        text: '1核1GB',
        value: 'rds.mysql.t1.small',
    },
    {
        text: '1核2GB',
        value: 'rds.mysql.s1.small',
    },
    {
        text: '2核4GB',
        value: 'rds.mysql.s2.large',
    },
    {
        text: '2核8GB',
        value: 'rds.mysql.s2.xlarge',
    },
    {
        text: '4核16GB',
        value: 'rds.mysql.m1.medium',
    },
    {
        text: '8核32GB',
        value: 'rds.mysql.c1.xlarge',
    },
    {
        text: '8 核 64GB（通用型）',
        value: 'rds.mysql.s8.xlarge',
    },
    {
        text: '16 核 32GB（通用型）',
        value: 'rds.mysql.s2.2xlarge',
    },
    {
        text: '16核64GB',
        value: 'rds.mysql.c2.xlarge',
    },
    {
        text: '16核96GB',
        value: 'rds.mysql.c2.xlp2',
    },
    {
        text: '32 核 64GB（通用型）',
        value: 'rds.mysql.s2.4xlarge',
    },
    {
        text: '16核128GB',
        value: 'rds.mysql.c2.2xlarge',
    },
    {
        text: '32 核 128GB（通用型）',
        value: 'rds.mysql.s4.4xlarge',
    },
    {
        text: '64 核 128GB（通用型）',
        value: 'rds.mysql.s2.8xlarge',
    },
    {
        text: '32 核 256GB（通用型）',
        value: 'rds.mysql.s8.4xlarge',
    },
    {
        text: '64 核 256GB（通用型）',
        value: 'rds.mysql.s4.8xlarge',
    },
    {
        text: '64 核 512GB（通用型）',
        value: 'rds.mysql.s8.8xlarge',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'mysql.x8.xlarge.2',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'mysql.x4.xlarge.2',
    },
    {
        text: '4核32GB（独享套餐）',
        value: 'mysql.x8.large.2',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'mysql.x4.large.2',
    },
    {
        text: '2核16GB（独享套餐）',
        value: 'mysql.x8.medium.2',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'mysql.x8.2xlarge.2',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'mysql.x4.2xlarge.2',
    },
    {
        text: '32核256GB（独享套餐）',
        value: 'mysql.x8.4xlarge.2',
    },
    {
        text: '32核128GB（独享套餐）',
        value: 'mysql.x4.4xlarge.2',
    },
    {
        text: '64核512GB（独享型）',
        value: 'mysql.x8.8xlarge.2',
    },
    {
        text: '30核220GB（独占主机）',
        value: 'rds.mysql.st.d13',
    },
    {
        text: '60核470GB（独占主机）',
        value: 'rds.mysql.st.h43',
    },
    {
        text: '90核720GB（独占物理机）',
        value: 'rds.mysql.st.v52',
    },
    {
        text: '2核240MB',
        value: 'rds.mys2.small',
    },
    {
        text: '4核600MB',
        value: 'rds.mys2.mid',
    },
    {
        text: '6核1200MB',
        value: 'rds.mys2.standard',
    },
    {
        text: '8核2400MB',
        value: 'rds.mys2.large',
    },
    {
        text: '9核6000MB',
        value: 'rds.mys2.xlarge',
    },
    {
        text: '10核12000MB',
        value: 'rds.mys2.2xlarge',
    },
    {
        text: '11核24000MB',
        value: 'rds.mys2.4xlarge',
    },
    {
        text: '13核48000MB',
        value: 'rds.mys2.8xlarge',
    },
    {
        text: '1核2GB',
        value: 'rds.mssql.s1.small',
    },
    {
        text: '4核8GB',
        value: 'rds.mssql.s3.large',
    },
    {
        text: '2核4GB',
        value: 'rds.mssql.s2.large',
    },
    {
        text: '2核2GB',
        value: 'rds.mssql.s1.large',
    },
    {
        text: '2核8GB',
        value: 'rds.mssql.s2.xlarge',
    },
    {
        text: '4核16GB',
        value: 'rds.mssql.m1.medium',
    },
    {
        text: '8核16GB',
        value: 'rds.mssql.c1.large',
    },
    {
        text: '8核32GB',
        value: 'rds.mssql.c1.xlarge',
    },
    {
        text: '16核64GB',
        value: 'rds.mssql.c2.xlarge',
    },
    {
        text: '16核96GB',
        value: 'rds.mssql.c2.xlp2',
    },
    {
        text: '16核128GB',
        value: 'rds.mssql.c2.2xlarge',
    },
    {
        text: '2核16GB（独享套餐）',
        value: 'mssql.x8.medium.2',
    },
    {
        text: '4核32GB（独享套餐）',
        value: 'mssql.x8.large.2',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'mssql.x8.xlarge.2',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'mssql.x8.2xlarge.2',
    },
    {
        text: '30核220GB（独占主机）',
        value: 'rds.mssql.st.d13',
    },
    {
        text: '60核470GB（独占主机）',
        value: 'rds.mssql.st.h43',
    },
    {
        text: '6核1000MB',
        value: 'rds.mss1.small',
    },
    {
        text: '共享CPU+2000MB内存',
        value: 'rds.mss1.mid',
    },
    {
        text: '9核4000MB',
        value: 'rds.mss1.standard',
    },
    {
        text: '10核6000MB',
        value: 'rds.mss1.large',
    },
    {
        text: '13核48000MB',
        value: 'rds.mss1.8xlarge',
    },
    {
        text: '11核8000MB',
        value: 'rds.mss1.xlarge',
    },
    {
        text: '12核12000MB',
        value: 'rds.mss1.2xlarge',
    },
    {
        text: '13核24000MB',
        value: 'rds.mss1.4xlarge',
    },
    {
        text: '4核8GB',
        value: 'rds.pg.s3.large',
    },
    {
        text: '8核16GB',
        value: 'rds.pg.c1.large',
    },
    {
        text: '8核32GB',
        value: 'rds.pg.c1.xlarge',
    },
    {
        text: '16核64GB',
        value: 'rds.pg.c2.xlarge',
    },
    {
        text: '16核128GB',
        value: 'rds.pg.c2.2xlarge',
    },
    {
        text: '2核16GB（独享套餐）',
        value: 'pg.x8.medium.2',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'pg.x4.large.2',
    },
    {
        text: '4核32GB（独享套餐）',
        value: 'pg.x8.large.2',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'pg.x4.xlarge.2',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'pg.x8.xlarge.2',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'pg.x4.2xlarge.2',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'pg.x8.2xlarge.2',
    },
    {
        text: '32核128GB（独享套餐）',
        value: 'pg.x4.4xlarge.2',
    },
    {
        text: '30核220GB（独占主机）',
        value: 'rds.pg.st.d13',
    },
    {
        text: '60核470GB（独占主机）',
        value: 'rds.pg.st.h43',
    },
    {
        text: '1核1GB',
        value: 'rds.pg.t1.small',
    },
    {
        text: '1核2GB',
        value: 'rds.pg.s1.small',
    },
    {
        text: '2核4GB',
        value: 'rds.pg.s2.large',
    },
    {
        text: '2核16GB（独享套餐）',
        value: 'mysql.x8.medium.3',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'mysql.x4.large.3',
    },
    {
        text: '4核32GB（独享套餐）',
        value: 'mysql.x8.large.3',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'mysql.x4.xlarge.3',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'mysql.x8.xlarge.3',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'mysql.x4.2xlarge.3',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'mysql.x8.2xlarge.3',
    },
    {
        text: '32核128GB（独享套餐）',
        value: 'mysql.x4.4xlarge.3',
    },
    {
        text: '32核256GB（独享套餐）',
        value: 'mysql.x8.4xlarge.3',
    },
    {
        text: '60 核 470GB（独占物理机）',
        value: 'mysql.st.8xlarge.3',
    },
    {
        text: '4核8GB',
        value: 'mssql.x2.large.w1',
    },
    {
        text: '2核4GB',
        value: 'mssql.x2.medium.w1',
    },
    {
        text: '8核16GB',
        value: 'mssql.x2.xlarge.w1',
    },
    {
        text: '16核32GB',
        value: 'mssql.x2.2xlarge.w1',
    },
    {
        text: '2核8GB',
        value: 'mssql.x4.medium.w1',
    },
    {
        text: '4核16GB',
        value: 'mssql.x4.large.w1',
    },
    {
        text: '8核32GB',
        value: 'mssql.x4.xlarge.w1',
    },
    {
        text: '16核64GB',
        value: 'mssql.x4.2xlarge.w1',
    },
    {
        text: '2核4GB',
        value: 'mysql.n2.medium.2c',
    },
    {
        text: '1核2GB',
        value: 'mysql.n2.small.2c',
    },
    {
        text: '8 核 64GB（独享型）',
        value: 'mysql.x8.xlarge.2c',
    },
    {
        text: '8核32GB（独享）',
        value: 'mysql.x4.xlarge.2c',
    },
    {
        text: '8核16GB（独享）',
        value: 'mysql.x2.xlarge.2c',
    },
    {
        text: '4 核 32GB（独享型）',
        value: 'mysql.x8.large.2c',
    },
    {
        text: '4核16GB（独享）',
        value: 'mysql.x4.large.2c',
    },
    {
        text: '4核8GB（独享）',
        value: 'mysql.x2.large.2c',
    },
    {
        text: '2 核 16GB（独享型）',
        value: 'mysql.x8.medium.2c',
    },
    {
        text: '2 核 8GB（独享型）',
        value: 'mysql.x4.medium.2c',
    },
    {
        text: '2 核 4GB（独享型）',
        value: 'mysql.x2.medium.2c',
    },
    {
        text: '12 核 96GB（独享型）',
        value: 'mysql.x8.3large.2c',
    },
    {
        text: '12 核 48GB（独享型）',
        value: 'mysql.x4.3large.2c',
    },
    {
        text: '12 核 24GB（独享型）',
        value: 'mysql.x2.3large.2c',
    },
    {
        text: '16核128GB（独享）',
        value: 'mysql.x8.2xlarge.2c',
    },
    {
        text: '16核64GB（独享）',
        value: 'mysql.x4.2xlarge.2c',
    },
    {
        text: '16核32GB（独享）',
        value: 'mysql.x2.2xlarge.2c',
    },
    {
        text: '24 核 192GB（独享型）',
        value: 'mysql.x8.3xlarge.2c',
    },
    {
        text: '24 核 96GB（独享型）',
        value: 'mysql.x4.3xlarge.2c',
    },
    {
        text: '24 核 48GB（独享型）',
        value: 'mysql.x2.3xlarge.2c',
    },
    {
        text: '32核256GB（独享）',
        value: 'mysql.x8.4xlarge.2c',
    },
    {
        text: '32核128GB（独享）',
        value: 'mysql.x4.4xlarge.2c',
    },
    {
        text: '32 核 64GB（独享型）',
        value: 'mysql.x2.4xlarge.2c',
    },
    {
        text: '52 核 384GB（独享型）',
        value: 'mysql.x8.13large.2c',
    },
    {
        text: '52 核 192GB（独享型）',
        value: 'mysql.x4.13large.2c',
    },
    {
        text: '52 核 96GB（独享型）',
        value: 'mysql.x2.13large.2c',
    },
    {
        text: '56核480GB（独占物理机）',
        value: 'mysql.x8.8xlarge.2c',
    },
    {
        text: '56核224GB（独占物理机）',
        value: 'mysql.x4.8xlarge.2c',
    },
    {
        text: '64 核 128GB（独享型）',
        value: 'mysql.x2.8xlarge.2c',
    },
    {
        text: '102 核 768GB（独享型）',
        value: 'mysql.x8.13xlarge.2c',
    },
    {
        text: '104 核 384GB（独享型）',
        value: 'mysql.x4.13xlarge.2c',
    },
    {
        text: '104 核 192GB（独享型）',
        value: 'mysql.x2.13xlarge.2c',
    },
    {
        text: '4核8GB（独享套餐）',
        value: 'mariadb.x2.large.2c',
    },
    {
        text: '2核4GB',
        value: 'mariadb.n2.medium.2c',
    },
    {
        text: '1核2GB',
        value: 'mariadb.n2.small.2c',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'mariadb.x4.large.2c',
    },
    {
        text: '8核16GB（独享套餐）',
        value: 'mariadb.x2.xlarge.2c',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'mariadb.x4.xlarge.2c',
    },
    {
        text: '16核32GB（独享套餐）',
        value: 'mariadb.x2.2xlarge.2c',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'mariadb.x4.2xlarge.2c',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'mariadb.x8.2xlarge.2c',
    },
    {
        text: '32核128GB（独享套餐）',
        value: 'mariadb.x4.4xlarge.2c',
    },
    {
        text: '32核256GB（独享套餐）',
        value: 'mariadb.x8.4xlarge.2c',
    },
    {
        text: '56核224GB（独占物理机）',
        value: 'mariadb.x4.8xlarge.2c',
    },
    {
        text: '56核480GB（独占物理机）',
        value: 'mariadb.x8.8xlarge.2c',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'ppas.x4.large.2',
    },
    {
        text: '2核16GB（独享套餐）',
        value: 'ppas.x8.medium.2',
    },
    {
        text: '2核8GB（独享套餐）',
        value: 'ppas.x4.medium.2',
    },
    {
        text: '1核8GB（独享套餐）',
        value: 'ppas.x8.small.2',
    },
    {
        text: '1核4GB（独享套餐）',
        value: 'ppas.x4.small.2',
    },
    {
        text: '4核32GB（独享套餐）',
        value: 'ppas.x8.large.2',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'ppas.x4.xlarge.2',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'ppas.x8.xlarge.2',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'ppas.x4.2xlarge.2',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'ppas.x8.2xlarge.2',
    },
    {
        text: '32核128GB（独享套餐）',
        value: 'ppas.x4.4xlarge.2',
    },
    {
        text: '32核256GB（独享套餐）',
        value: 'ppas.x8.4xlarge.2',
    },
    {
        text: '30核220GB（独占主机）',
        value: 'rds.ppas.st.d13',
    },
    {
        text: '60核470GB（独占主机）',
        value: 'rds.ppas.st.h43',
    },
    {
        text: '1核1GB（兼容性测试用）',
        value: 'rds.ppas.t1.small',
    },
    {
        text: '4核8GB',
        value: 'rds.ppas.s3.large',
    },
    {
        text: '8核16GB',
        value: 'rds.ppas.m1.medium',
    },
    {
        text: '8核32GB',
        value: 'rds.ppas.c1.xlarge',
    },
    {
        text: '16核64GB',
        value: 'rds.ppas.c2.xlarge',
    },
    {
        text: '1核2GB',
        value: 'rds.ppas.s1.small',
    },
    {
        text: '2核4GB',
        value: 'rds.ppas.s2.large',
    },
    {
        text: '16核128GB',
        value: 'rds.ppas.c2.2xlarge',
    },
    {
        text: '4核16GB（单机基础版）',
        value: 'pg.n4.large.1',
    },
    {
        text: '4核8GB（单机基础版）',
        value: 'pg.n2.large.1',
    },
    {
        text: '2核4GB（单机基础版）',
        value: 'pg.n2.medium.1',
    },
    {
        text: '2核8GB（单机基础版）',
        value: 'pg.n4.medium.1',
    },
    {
        text: '1核2GB（单机基础版）',
        value: 'pg.n2.small.1',
    },
    {
        text: '1核1GB（单机基础版）',
        value: 'pg.n1.micro.1',
    },
    {
        text: '8核16GB（单机基础版）',
        value: 'pg.n2.xlarge.1',
    },
    {
        text: '8核32GB（单机基础版）',
        value: 'pg.n4.xlarge.1',
    },
    {
        text: '16核32GB（单机基础版）',
        value: 'pg.n2.2xlarge.1',
    },
    {
        text: '16核64GB（单机基础版）',
        value: 'pg.n4.2xlarge.1',
    },
    {
        text: '16核128GB（单机基础版）',
        value: 'pg.n8.2xlarge.1',
    },
    {
        text: '32核128GB（单机基础版）',
        value: 'pg.n4.4xlarge.1',
    },
    {
        text: '32核256GB（单机基础版）',
        value: 'pg.n8.4xlarge.1',
    },
    {
        text: '56核224GB（单机基础版）',
        value: 'pg.n4.8xlarge.1',
    },
    {
        text: '56核480GB（单机基础版）',
        value: 'pg.n8.8xlarge.1',
    },
    {
        text: '2核2GB',
        value: 'mssql.s1.medium.s2',
    },
    {
        text: '1核2GB',
        value: 'mssql.s2.small.s2',
    },
    {
        text: '4 核 8GB（共享实例）',
        value: 'mssql.mem2.large.s2',
    },
    {
        text: '2 核 4GB（共享实例）',
        value: 'mssql.mem2.medium.s2',
    },
    {
        text: '8 核 16GB(共享实例）',
        value: 'mssql.mem2.xlarge.s2',
    },
    {
        text: '12 核 24GB(共享实例）',
        value: 'mssql.mem2.2xlarge.s2',
    },
    {
        text: '16 核 32GB(共享实例）',
        value: 'mssql.mem2.3xlarge.s2',
    },
    {
        text: '24 核 48GB(共享实例）',
        value: 'mssql.mem2.4xlarge.s2',
    },
    {
        text: '4核8GB',
        value: 'mssql.s2.large.s2',
    },
    {
        text: '2核4GB',
        value: 'mssql.s2.medium.s2',
    },
    {
        text: '8核16GB',
        value: 'mssql.s2.xlarge.s2',
    },
    {
        text: '2核8GB（独享套餐）',
        value: 'mssql.x4.medium.s2',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'mssql.x4.large.s2',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'mssql.x4.xlarge.s2',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'mssql.x4.2xlarge.s2',
    },
    {
        text: '24核96GB（独享套餐）',
        value: 'mssql.x4.3xlarge.s2',
    },
    {
        text: '2核16GB（独享型）',
        value: 'mssql.x8.medium.s2',
    },
    {
        text: '4核32GB（独享型）',
        value: 'mssql.x8.large.s2',
    },
    {
        text: '8核64GB（独享型）',
        value: 'mssql.x8.xlarge.s2',
    },
    {
        text: '16核128GB（独享型）',
        value: 'mssql.x8.2xlarge.s2',
    },
    {
        text: '2核8GB（独享型）',
        value: 'mssql.x4.medium.e2',
    },
    {
        text: '4核16GB（独享型）',
        value: 'mssql.x4.large.e2',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'mssql.x4.xlarge.e2',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'mssql.x4.2xlarge.e2',
    },
    {
        text: '24核96GB（独享套餐）',
        value: 'mssql.x4.3xlarge.e2',
    },
    {
        text: '32核128GB（独享型）',
        value: 'mssql.x4.4xlarge.e2',
    },
    {
        text: '64核256GB（独享型）',
        value: 'mssql.x4.8xlarge.e2',
    },
    {
        text: '2核16GB（独享型）',
        value: 'mssql.x8.medium.e2',
    },
    {
        text: '4核32GB（独享型）',
        value: 'mssql.x8.large.e2',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'mssql.x8.xlarge.e2',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'mssql.x8.2xlarge.e2',
    },
    {
        text: '32核256GB（独享套餐）',
        value: 'mssql.x8.4xlarge.e2',
    },
    {
        text: '56核480GB（独享套餐）',
        value: 'mssql.x8.7xlarge.e2',
    },
    {
        text: '64核512GB（独享型）',
        value: 'mssql.x8.8xlarge.e2',
    },
    {
        text: '2 核 8GB（GPU计算型(gn5i)）',
        value: 'pg.gn5i-c2g1.large.1',
    },
    {
        text: '4 核 16GB（GPU计算型(gn5i)）',
        value: 'pg.gn5i-c4g1.xlarge.1',
    },
    {
        text: '8 核 32GB（GPU计算型(gn5i)）',
        value: 'pg.gn5i-c8g1.2xlarge.1',
    },
    {
        text: '16 核 64GB（GPU计算型(gn5i)）',
        value: 'pg.gn5i-c16g1.4xlarge.1',
    },
    {
        text: '32 核 128GB（GPU计算型(gn5i)）',
        value: 'pg.gn5i-c16g1.8xlarge.1',
    },
    {
        text: '56 核 224GB（GPU计算型(gn5i)）',
        value: 'pg.gn5i-c28g1.14xlarge.1',
    },
    {
        text: '8 核 16GB（通用型）',
        value: 'mysql.n2.xlarge.25',
    },
    {
        text: '4 核 8GB（通用型）',
        value: 'mysql.n2.large.25',
    },
    {
        text: '1 核 2GB（通用型）',
        value: 'mysql.n2.small.25',
    },
    {
        text: '2 核 4GB（通用型）',
        value: 'mysql.n2.medium.25',
    },
    {
        text: '2 核 8GB（通用型）',
        value: 'mysql.n4.medium.25',
    },
    {
        text: '4 核 16GB（通用型）',
        value: 'mysql.n4.large.25',
    },
    {
        text: '8 核 32GB（通用型）',
        value: 'mysql.n4.xlarge.25',
    },
    {
        text: '16 核 64GB（通用型）',
        value: 'mysql.n4.2xlarge.25',
    },
    {
        text: '16 核 128GB（通用型）',
        value: 'mysql.n8.2xlarge.25',
    },
    {
        text: '8核64GB（独享套餐）',
        value: 'mysql.x8.xlarge.25',
    },
    {
        text: '8核32GB（独享套餐）',
        value: 'mysql.x4.xlarge.25',
    },
    {
        text: '4核32GB（独享套餐）',
        value: 'mysql.x8.large.25',
    },
    {
        text: '4核16GB（独享套餐）',
        value: 'mysql.x4.large.25',
    },
    {
        text: '2核16GB（独享套餐）',
        value: 'mysql.x8.medium.25',
    },
    {
        text: '16核128GB（独享套餐）',
        value: 'mysql.x8.2xlarge.25',
    },
    {
        text: '16核64GB（独享套餐）',
        value: 'mysql.x4.2xlarge.25',
    },
    {
        text: '32核256GB（独享套餐）',
        value: 'mysql.x8.4xlarge.25',
    },
    {
        text: '32核128GB（独享套餐）',
        value: 'mysql.x4.4xlarge.25',
    },
    {
        text: '60核470GB（独占物理机）',
        value: 'mysql.st.8xlarge.25',
    },
    {
        text: '90核720GB（独占物理机）',
        value: 'mysql.st.12xlarge.25',
    },
    {
        text: '1 核 2GB',
        value: 'pg.n2.small.2c',
    },
    {
        text: '2核4GB',
        value: 'pg.n2.medium.2c',
    },
    {
        text: '4 核 8GB（独享）',
        value: 'pg.x2.large.2c',
    },
    {
        text: '8 核 16GB（独享）',
        value: 'pg.x2.xlarge.2c',
    },
    {
        text: '16 核 32GB（独享）',
        value: 'pg.x2.2xlarge.2c',
    },
    {
        text: '4 核 16GB（独享）',
        value: 'pg.x4.large.2c',
    },
    {
        text: '8 核 32GB（独享）',
        value: 'pg.x4.xlarge.2c',
    },
    {
        text: '16 核 64GB（独享）',
        value: 'pg.x4.2xlarge.2c',
    },
    {
        text: '32 核 128GB（独享）',
        value: 'pg.x4.4xlarge.2c',
    },
    {
        text: '64 核 256GB（独享）',
        value: 'pg.x4.8xlarge.2c',
    },
    {
        text: '16 核 128GB（独享）',
        value: 'pg.x8.2xlarge.2c',
    },
    {
        text: '32 核 256GB（独享）',
        value: 'pg.x8.4xlarge.2c',
    },
    {
        text: '64 核 512GB（独享）',
        value: 'pg.x8.8xlarge.2c',
    },
    {
        text: '16核32GB',
        value: 'mssql.s2.2xlarge.s2',
    },
    {
        text: '2核8GB',
        value: 'mssql.s4.medium.s2',
    },
    {
        text: '4核16GB',
        value: 'mssql.s4.large.s2',
    },
    {
        text: '8核32GB',
        value: 'mssql.s4.xlarge.s2',
    },
    {
        text: '16核64GB',
        value: 'mssql.s4.2xlarge.s2',
    },
    {
        text: '16核128GB',
        value: 'mssql.s8.2xlarge.s2',
    },
    {
        text: '8 核 64GB（通用型）',
        value: 'mysql.n8.xlarge.25',
    },
    {
        text: '16 核 32GB（通用型）',
        value: 'mysql.n2.2xlarge.25',
    },
    {
        text: '32 核 64GB（通用型）',
        value: 'mysql.n2.4xlarge.25',
    },
    {
        text: '32 核 128GB（通用型）',
        value: 'mysql.n4.4xlarge.25',
    },
    {
        text: '32 核 256GB（通用型）',
        value: 'mysql.n8.4xlarge.25',
    },
    {
        text: '64 核 128GB（通用型）',
        value: 'mysql.n2.8xlarge.25',
    },
    {
        text: '64 核 256GB（通用型）',
        value: 'mysql.n4.8xlarge.25',
    },
    {
        text: '64 核 512GB（通用型）',
        value: 'mysql.n8.8xlarge.25',
    },
    {
        text: '16 核 90GB（独占物理机）',
        value: 'mysql.x5.2xlarge.25.aligroup',
    },
    {
        text: '32 核 180GB（独占物理机）',
        value: 'mysql.x5.4xlarge.25.aligroup',
    },
    {
        text: '48 核 360GB（独占物理机）',
        value: 'mysql.x7.6xlarge.25.aligroup',
    },
    {
        text: '96 核 720GB（独占物理机）',
        value: 'mysql.x7.12xlarge.25.aligroup',
    },
    {
        text: '4 核 8GB（通用型）',
        value: 'mysql.n2.large.25c',
    },
    {
        text: '1 核 2GB（通用型）',
        value: 'mysql.n2.small.25c',
    },
    {
        text: '1 核 4GB（通用型）',
        value: 'mysql.n4.small.25c',
    },
    {
        text: '2 核 4GB（通用型）',
        value: 'mysql.n2.medium.25c',
    },
    {
        text: '2 核 8GB（通用型）',
        value: 'mysql.n4.medium.25c',
    },
    {
        text: '4 核 16GB（通用型）',
        value: 'mysql.n4.large.25c',
    },
    {
        text: '8 核 16GB（通用型）',
        value: 'mysql.n2.xlarge.25c',
    },
    {
        text: '8 核 32GB（通用型）',
        value: 'mysql.n4.xlarge.25c',
    },
    {
        text: '12 核 24GB（独享型）',
        value: 'mysql.x2.3large.25c',
    },
    {
        text: '12 核 48GB（独享型）',
        value: 'mysql.x4.3large.25c',
    },
    {
        text: '12 核 96GB（独享型）',
        value: 'mysql.x8.3large.25c',
    },
    {
        text: '16 核 32GB（独享型）',
        value: 'mysql.x2.2xlarge.25c',
    },
    {
        text: '16 核 64GB（独享型）',
        value: 'mysql.x4.2xlarge.25c',
    },
    {
        text: '16 核 128GB（独享型）',
        value: 'mysql.x8.2xlarge.25c',
    },
    {
        text: '24 核 48GB（独享型）',
        value: 'mysql.x2.3xlarge.25c',
    },
    {
        text: '24 核 96GB（独享型）',
        value: 'mysql.x4.3xlarge.25c',
    },
    {
        text: '24 核 192GB（独享型）',
        value: 'mysql.x8.3xlarge.25c',
    },
    {
        text: '32 核 64GB（独享型）',
        value: 'mysql.x2.4xlarge.25c',
    },
    {
        text: '32 核 128GB（独享型）',
        value: 'mysql.x4.4xlarge.25c',
    },
    {
        text: '32 核 256GB（独享型）',
        value: 'mysql.x8.4xlarge.25c',
    },
    {
        text: '52 核 96GB（独享型）',
        value: 'mysql.x2.13large.25c',
    },
    {
        text: '52 核 192GB（独享型）',
        value: 'mysql.x4.13large.25c',
    },
    {
        text: '52 核 384GB（独享型）',
        value: 'mysql.x8.13large.25c',
    },
    {
        text: '64 核 128GB（独享型）',
        value: 'mysql.x2.8xlarge.25c',
    },
    {
        text: '64 核 256GB（独享型）',
        value: 'mysql.x4.8xlarge.25c',
    },
    {
        text: '64 核 512GB（独享型）',
        value: 'mysql.x8.8xlarge.25c',
    },
    {
        text: '104 核 192GB（独享型）',
        value: 'mysql.x2.13xlarge.25c',
    },
    {
        text: '104 核 384GB（独享型）',
        value: 'mysql.x4.13xlarge.25c',
    },
    {
        text: '104 核 768GB（独享型）',
        value: 'mysql.x8.13xlarge.25c',
    },
    {
        text: '2 核 4GB（独享）',
        value: 'pg.x2.medium.2c',
    },
    {
        text: '2 核 8GB（独享）',
        value: 'pg.x4.medium.2c',
    },
    {
        text: '2 核 16GB（独享）',
        value: 'pg.x8.medium.2c',
    },
    {
        text: '4 核 32GB（独享）',
        value: 'pg.x8.large.2c',
    },
    {
        text: '8 核 64GB（独享）',
        value: 'pg.x8.xlarge.2c',
    },
    {
        text: '12 核 24GB（独享）',
        value: 'pg.x2.3large.2c',
    },
    {
        text: '12 核 48GB（独享）',
        value: 'pg.x4.3large.2c',
    },
    {
        text: '12 核 96GB（独享）',
        value: 'pg.x8.3large.2c',
    },
    {
        text: '24 核 48GB（独享）',
        value: 'pg.x2.3xlarge2c',
    },
    {
        text: '24 核 96GB（独享）',
        value: 'pg.x4.3xlarge.2c',
    },
    {
        text: '24 核 192GB（独享）',
        value: 'pg.x8.3xlarge.2c',
    },
    {
        text: '32 核 64GB（独享）',
        value: 'pg.x2.4xlarge.2c',
    },
    {
        text: '52 核 104GB（独享）',
        value: 'pg.x2.13large.2c',
    },
    {
        text: '52 核 192GB（独享）',
        value: 'pg.x4.13large.2c',
    },
    {
        text: '52 核 384GB（独享）',
        value: 'pg.x8.13large.2c',
    },
    {
        text: '64 核 128GB（独享）',
        value: 'pg.x2.8xlarge.2c',
    },
    {
        text: '104 核 192GB（独享）',
        value: 'pg.x2.13xlarge.2c',
    },
    {
        text: '104 核 384GB（独享）',
        value: 'pg.x4.13xlarge.2c',
    },
    {
        text: '104 核 768GB（独享）',
        value: 'pg.x8.13xlarge.2c',
    },
];

export default classList;
