import mysql from 'mysql'

import {database as db_config} from '../env.config'

var pool = mysql.createPool({
    connectionLimit : 1000,
    host            : db_config.host,
    user            : db_config.user,
    password        : db_config.password,
    database        : db_config.database
})

export default {

    query: (query, params, callback) => {
        pool.getConnection(function(err, connection) {
            if (err) throw err // not connected!
           
            // Use the connection
            connection.query(query, params, function (error, results, fields) {
              // When done with the connection, release it.
              connection.release()

              // Handle error after the release.
              if (error) throw error

              connection.destroy()

              callback(error, results)
        
            })
        })
    },

    pingCheck : (callback) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(true, err)
            } else {
                connection.destroy()
                callback(false, null)
            }
        })
    }
}
