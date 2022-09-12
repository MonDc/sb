const sqlQuery = require('./sql');
const fs = require('fs');
const path = require('path');
const nodeEnv = process.env.NODE_ENV;


function insertMessage(message, user_id, created_at, updated_at) {
    const insertPromise = new Promise((resolve, reject) => {
        var query = "INSERT INTO iy_messages (`message`,`user_id`, `created_at`, `updated_at`) VALUES ('" + message + "', '" + user_id + "', '" + created_at + "', '" + updated_at + "') ";


        sqlQuery.sqlQuery(query).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        }).catch(error => {
            reject(error);
        })
    });
    return insertPromise;

}



module.exports = {
    insertMessage,
};