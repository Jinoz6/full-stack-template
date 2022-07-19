import connect from '../../../configs/database-connect'

export const getUsers = (callback) => {
    
    return connect.query('SELECT * FROM users', (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    })
   
}