import connect from '../../../configs/database-connect'

export const getUsers = (callback) => {
   return connect.query("SELECT * FROM users ", [], callback)    
}