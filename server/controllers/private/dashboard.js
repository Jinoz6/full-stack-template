
import express from 'express'
import * as database from '../../models/private/models_private'
import jwt from 'jsonwebtoken'


const router = express.Router()
const middleware = require('../middleware/middleLog')
/* GET LogIn page. */
router.get('/login',middleware.authLogger,(req, res, next)=> {
  return res.render('./auth/login', { title: 'Login' });
});

router.post('/login',(req, res, next)=> { 
  return database.users((err, result)=> {    
   //method POST //Login encrypt password
    if(err) {
     next(err)
    }else{
     //check user match      
      const user = result.find(user => user.username === req.body.username)      
      if(!user){
        return res.status(401).send({message:'No user found'})
      }else{
        if(user.password === req.body.password){
          // user token
          const accessToken = jwt.sign({username: user.username, password: user.password, role: user.role}, 'lao-asean-hospital', {expiresIn: '5s' });
          // store token in session
          req.session.token = accessToken
          return res.status(200).send({message:'Login success', data:accessToken})          
        }else{                          
          return res.status(401).send({message:'Password incorrect'})
        }        
      }
    }
   
  })
});

/* End LogIn page. */



/* GET Register page. */
router.get('/register',(req, res, next)=> {
  return res.render('./auth/register', { title: 'Register' });
 });
router.post('/register',database.createUser,(req, res, next)=> {
    if(err) {
     next(err)
    }else{
      return res.json({
        status: 200,
        message: 'OK', 
        data: req.body
      })
    } 
});


/* End Register page. */



/* GET DashBoard page. */
router.get('/dashboard',middleware.authLogger,(req, res, next)=> {    
    return res.render('./dashboard/dashboard', { title: 'DashBoard' }); 
});



/* End DashBoard page. */

/* GET DashBoard page. */
router.get('/opd', (req, res, next)=> {
  return res.render('./opd/opd', { title: 'OPD' });
 });


/* End DashBoard page. */

export default router