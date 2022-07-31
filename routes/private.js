import express from 'express'

var router = express.Router()

// import home_route from '../../server/controllers/api/index'
// router.use('/',home_route)

import login from '../server/controllers/private/dashboard'
router.use('/',login)

import register from '../server/controllers/private/dashboard'
router.use('/',register)

import dashboard from '../server/controllers/private/dashboard'
router.use('/',dashboard)

import opd from '../server/controllers/private/dashboard'
router.use('/',opd)




export default router