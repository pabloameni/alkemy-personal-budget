const mysql  = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10
});

pool.p_execute = (statement, values) => {
    return new Promise((resolve, reject) => {
        pool.execute(statement, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

pool.p_query = (statement, values) => {
    return new Promise((resolve, reject) => {
        pool.query(statement, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

module.exports = pool;