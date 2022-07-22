import express from 'express'
var router = express.Router()


import login from '../../../server/controllers/middleware/register'
router.use('/',login)



export default router


