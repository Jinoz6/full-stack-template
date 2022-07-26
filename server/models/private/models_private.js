import connect from '../../../configs/database-connect'

// Register User

export const admin = (callback) => {
   return connect.query("SELECT username,password FROM users Where role = 'admin'", callback)  
}

export const user = (callback) => {
   return connect.query("SELECT username,password FROM users Where role = 'user'", callback)  
}