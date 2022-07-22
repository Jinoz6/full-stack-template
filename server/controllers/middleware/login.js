import express from 'express'
import * as loginUser from '../../models/private/Test'


const router = express.Router()

/* GET home page. */
router.get('/login', (req, res, next)=> {
   return res.render('./auth/login', { title: 'Login' });
  });

router.post('/login',loginUser.logger,(req, res, next)=> {
    if (err) {
      next(err)
    } else {
      return res.json({
        status: 200,
        message: 'OK', 
        data: req.body
      })
    }
});
export default router