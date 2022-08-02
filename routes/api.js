import express from 'express'
var router = express.Router()

import home_route from '../server/controllers/api/index'
router.use('/', home_route)

import login_route from '../server/controllers/api/login'
router.use('/login', login_route)

import register_route from '../server/controllers/api/register'
router.use('/register', register_route)

export default router