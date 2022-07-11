import express from 'express'
var router = express.Router()

import home_route from '../server/controllers/private/index'
router.use('/',home_route)

export default router