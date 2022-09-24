const sqlQuery = require('./sql');
const fs = require('fs');
const path = require('path');
const nodeEnv = process.env.NODE_ENV;


function getMessages(userId) {
    const messagePromise = new Promise((resolve, reject) => {
        var query = "SELECT * FROM iy_messages WHERE user_id LIKE '" + userId + "' ORDER BY id DESC limit 10";


        sqlQuery.sqlQuery(query).then(data => {

            resolve(data);
        }).catch(error => {
            reject(error);
        }).catch(error => {
            reject(error);
        })
    });
    return messagePromise;

}



module.exports = {
    getMessages,
}