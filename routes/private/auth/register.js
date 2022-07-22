import express from 'express'
var router = express.Router()


import register from '../../../server/controllers/middleware/login'
router.use('/',register)



export default router
