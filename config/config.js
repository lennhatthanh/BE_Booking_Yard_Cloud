require("dotenv").config();
const fs = require("fs");
const getDBConfig = require("./services/secret");

const sslConfig = {
    require: true,
    rejectUnauthorized: false, // có thể đổi thành true nếu bạn muốn xác thực CA chặt chẽ
    ca: fs.readFileSync("./global-bundle.pem").toString(),
};

module.exports = {
    development: {
        host: config.host,
        user: config.username,
        password: config.password,
        database: config.dbname,
        port: config.port,
        dialect: process.env.DB_DIALECT || "postgres",
        dialectOptions: {
            ssl: sslConfig,
        },
    },
    production: {
        host: config.host,
        user: config.username,
        password: config.password,
        database: config.dbname,
        port: config.port,
        dialect: process.env.DB_DIALECT || "postgres",
        dialectOptions: {
            ssl: sslConfig,
        },
    },
};
