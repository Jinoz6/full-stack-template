
import express from 'express'
var router = express.Router()

import dashboard from '../../../server/controllers/private/dashboard'

router.use('/dashboard',dashboard)


export default router