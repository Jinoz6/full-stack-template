import express from 'express'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import * as user from '../../models/api/User'

const router = express.Router()

router.post('/', (req, res, next) => {

    user.getUserDetailsByEmail(req.body.email, (err, result) => {

        if (err) {
            next(err)
        } else {

            if (result.length > 0) {

                //check user match      
                if (result[0].password === req.body.pass) {
                    // user token
                    const accessToken = jwt.sign({ username: result[0].email, password: result[0].password, role: result[0].role }, 'lao-asean-hospital', { expiresIn: '5s' });
                    // store token in session
                    req.session.token = accessToken

                    return res.json({
                        status: 200,
                        message: 'Login success',
                        data: accessToken
                    })

                } else {
                    next(createError(401))
                }

            } else {
                next(createError(404))
            }
        }
    })
});


export default router