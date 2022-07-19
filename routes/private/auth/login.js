import express from 'express'
var router = express.Router()


import login from '../../../server/controllers/middleware/login'
router.use('/',login)



export default router


