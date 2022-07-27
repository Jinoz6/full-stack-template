import connect from '../../../configs/database-connect'

// Register User

export const users = (callback) => {
   return connect.query("SELECT * FROM users",[], callback)  
}

//New User execute

export const addUser = (callback) => {
  return connect.query("SELECT * FROM users",[], callback)
}
//UPDATE new user into users


//Create Table users

  // export const createTableUsers = (callback) => {
  //   return connect.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL, token VARCHAR(255) NOT NULL, TimeStamp TIMESTAMP NOT NULL, Date DATE NOT NULL)",[], callback)
  // }
