import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/register', (req, res, next)=> {
   return res.render('./auth/register', { title: 'Register' });
  });


export default router