import express from 'express'
// import * as database from '../../models/private/models_private'
import jwt from 'jsonwebtoken'
var router = express.Router()
// middleware(['admin','user'])

export const userLogger = (req, res, next) => {  
   if(user.role == 'admin'){
     return res.redirect('/auth/dashboard')
   }
   next()
   if(user.role == 'user'){
     return res.redirect('/auth/dashboard')
   }
   next()
}







export const authLogger = (req, res, next) => {
    const user = req.body.username
    if(user == null){
        return res.status(403).send({message:'You need to login first'})
    }
    next();
}


export const verifyToken = (req, res, next)=>{
   const token = req.headers['x-access-token']
    if(!token){
        return res.status(401).send({message:'No token provided'})
    }else{
        if(token){
            jwt.verify(token,(err, decoded)=>{
                if(err){
                    return res.status(401).send({message:'Invalid token'})
                }else{
                    req.decoded = decoded
                    next()
                }
            })
        }
    }
}




export default router




