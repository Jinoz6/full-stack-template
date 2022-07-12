import express from 'express'
var router = express.Router()

import home_route from '../server/controllers/api/index'
router.use('/',home_route)

export default router