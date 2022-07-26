
import express, { json } from 'express'
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
      const user = result.find(user => user.username === req.body.username && user.password === req.body.password)
      const admin = result.find(admin => admin.role === req.body.role)
      if(user == admin){       
        return res.send({'status':'admin'})      
      }else{
        if(user == admin){
          return res.send({'status':'user'})
        }
      }
      if(!user){
        return res.send({'status':'No user found'})
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