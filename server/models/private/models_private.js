import connect from '../../../configs/database-connect'
var crypto = require('crypto');
// Register User

export const users = (callback) => {
   return connect.query("SELECT * FROM users",[], callback)  
}

