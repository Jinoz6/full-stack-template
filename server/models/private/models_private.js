import connect from '../../../configs/database-connect'

// Register User

export const admin = (callback) => {
   return connect.query("SELECT * FROM users", callback)  
}

