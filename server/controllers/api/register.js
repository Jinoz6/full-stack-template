import express from 'express'
import createError from 'http-errors'
import * as user from '../../models/api/User'

const router = express.Router()

/* GET home page. */
router.post('/', (req, res, next) => {

    if (req.body.email && req.body.pass) {

        user.createUser(req.body.email, req.body.pass, (err, result) => {

            if (err) {
                next(err)
            } else {

                return res.json({
                    status: 200,
                    message: 'Register successful',
                })

            }

        })

    } else {

        next(createError(400))

    }

});


export default router