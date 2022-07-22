import express from 'express'
import * as registerUser from '../../models/private/Test'

const router = express.Router()


/* GET home page. */
router.get('/register', (req, res, next)=> {
   return res.render('./auth/register', { title: 'Register' });
  });

router.post('/register',registerUser.createUser,(req, res, next)=> {
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