
import express from 'express'
import * as database from '../../models/private/models_private'



const router = express.Router()

/* GET LogIn page. */
router.get('/login', (req, res, next)=> {
  return res.render('./auth/login', { title: 'Login' });
});

router.post('/login',(req, res, next)=> { 
  return database.admin((err, result)=> {    
   //method POST //Login encrypt password
    if(err) {
     next(err)
    }else{
     //check user match      
      const user = result.find(user => user.username === req.body.username)
      if(!user){
        return res.status(401).send({message:'User not found'})
      }else{
        if(user.password === req.body.password){
          return res.status(200).send({message:'Login success', user:user})
        }else{
          return res.status(401).send({message:'Password incorrect'})
        }
      }
    }
  })
});

/* End LogIn page. */



/* GET Register page. */
router.get('/register', (req, res, next)=> {
  return res.render('./auth/register', { title: 'Register' });
 });
router.post('/register',(req, res, next)=> { 
});


/* End Register page. */



/* GET DashBoard page. */
router.get('/dashboard', (req, res, next)=> {
   return res.render('./dashboard/dashboard', { title: 'Dashboard' });
  });


/* End DashBoard page. */



export default router