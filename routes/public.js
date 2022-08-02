import express from 'express'
var router = express.Router()


import home_route from '../server/controllers/public/index'
router.use('/', home_route)

import login from '../server/controllers/public/login'
router.use('/login', login)

import register from '../server/controllers/public/register'
router.use('/register', register)

export default router