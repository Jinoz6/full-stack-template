
import express from 'express'
const router = express.Router()

// middleware(['admin','user'])
const authPermission = (permissions)=>{
    return (req, res, next)=>{
        const role = req.body.role
        if(permissions.includes(role)){
            next()
        }else{
            return res.status(401).send({message:'You are not authorized'})
        }
    }
}

const authAccess = (req, res, next)=>{
    const token = req.headers['x-access-token']
    if(!token){
        return res.status(401).send({message:'No token provided'})
    }
    jsonwebtoken.verify(token, key, (err, decoded)=>{
        if(err){
            return res.status(401).send({message:'Failed to authenticate token'})
        }
        req.userId = decoded.id
        next()
    })
}







export default router