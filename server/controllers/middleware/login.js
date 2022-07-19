import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/login', (req, res, next)=> {
   return res.render('./auth/login', { title: 'Login' });
  });


export default router