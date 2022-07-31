import connect from '../../../configs/database-connect'
var crypto = require('crypto');
// Register User

export const users = (callback) => {
   return connect.query("SELECT * FROM users",[], callback)  
}

//New User execute

// export const addUser = (callback) => {
//  connect.query("SELECT * FROM users",[], callback)
    
// }


// export const addUser = (callback) => {
//   return connect.query('SELECT * FROM users', [], callback)
// }
export const createUser = (req, res, next) => {
  // check username is already exist
  connect.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, (err, result) => {
      if (err) {         
          next(err)
      } else {          
      if (result.length > 0) {
          return res.json({
              status: 400,
              message: 'Username already exist'
          })
      } else
            {
              // insert user to database
            connect.query(`INSERT INTO users (id,username, password, email, role ) VALUES ('${req.body.id}','${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.role}')`, (err, result) => {
            if (err) {
              next(err)
          } 
            else 
          {
            return res.json({
                status: 200,
                message: 'register success',
                data: result
            })
          }
        })
      }          
    }
  })
}