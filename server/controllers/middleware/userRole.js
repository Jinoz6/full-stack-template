import express from 'express'
var router = express.Router()

export const verifyToken = (req, res, next) => {
    //verify token
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }
    if (!token) {
        return res.json({
            status: 400,
            message: 'Token is not provided'
        })
    }else{
        //decode token
        jwt.verify(token, 'lao-asean-hospital', (err, decoded) => {
            if (err) {
                return res.json({
                    status: 400,
                    message: 'Token is invalid'
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}

export default router


