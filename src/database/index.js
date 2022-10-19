const mysql = require("mysql2/promise");
require('dotenv').config();

const connectToMysql = async () => {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const config = {
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }

    const connection = await mysql.createConnection(config);
    console.log('Conexão realizada com sucesso');
    global.connection = connection;
}

connectToMysql();

module.exports = { connectToMysql };