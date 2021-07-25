import knex from 'knex';

const config = require('@root/knexfile');

const environment = process.env.ENVIRONMENT || 'development';
const dbConfig = config[environment];

const main = knex(dbConfig);

const connections = {
    main,
};

export default connections;
