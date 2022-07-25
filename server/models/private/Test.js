import connect from '../../../configs/database-connect'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// Register User


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
            } else {
                //brcrypt password
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        next(err)
                    } else {
                        // insert user to database
                        connect.query(`INSERT INTO users (id,username, password, email, role ) VALUES ('${req.body.id}','${req.body.username}', '${hash}', '${req.body.email}', '${req.body.role}')`, (err, result) => {
                            if (err) {
                                next(err)
                            } else {
                                return res.json({
                                    status: 200,
                                    message: 'register success',
                                    data: result
                                })
                            }
                        })
                    }
                })
            }
            
        }
    })
}

export const logger = (req, res, next) => {
    //select username and password
    connect.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, (err, result) => {
        if (err) {
            next(err)
        } 
        else 
        {        
            if(!result.length){
                return res.json({
                    status: 400,
                    message: 'Sorry, username or password is incorrect'
                })
            }
            bcrypt.compare(req.body.password, result[0].password, (err, result) => {
                if (err) {
                    next(err)
                } else {
                    if (result) {
                        // create token
                        const token = jwt.sign({                            
                            username: result[0],                            
                            password: result[0]
                        }, 'secret', {
                            expiresIn: '1h'
                        })
                        return res.json({
                            status: 200,
                            message: 'login success',
                            data: {
                                token: token,
                                user: result[0]
                            }
                        })
                    } else {
                        return res.json({
                            status: 400,
                            message: 'Sorry, username or password is incorrect'
                        })
                    }
                }
            })
        }
    })
}