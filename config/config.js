require("dotenv").config();
const fs = require("fs");

const sslConfig = {
  require: true,
  rejectUnauthorized: false, // có thể đổi thành true nếu bạn muốn xác thực CA chặt chẽ
  ca: fs.readFileSync("./global-bundle.pem").toString(),
};

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: sslConfig,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: sslConfig,
    },
  },
};
