require('dotenv').config();
const mysql = require("mysql2/promise");


console.log(enviroment);

const connectToMysql = async () => {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }

    const connection = await mysql.createConnection(config);
    console.log('Conexão realizada com sucesso');
    global.connection = connection;

    // console.log('Host: ', process.env.HOST);
    // console.log('User: ', process.env.USER);
    // console.log('Password: ', process.env.PASSWORD);
    // console.log('Database: ', process.env.DATABASE);
}

connectToMysql();

module.exports = { connectToMysql };