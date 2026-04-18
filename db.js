const { Pool } = require("pg");
const getDBConfig = require("./services/secret");
require("dotenv").config();
const config = await getDBConfig();
const pool = new Pool({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.dbname,
    port: config.port,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;
