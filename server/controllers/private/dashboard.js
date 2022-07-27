
import express from 'express'
import * as database from '../../models/private/models_private'
var crypto = require('crypto');


const router = express.Router()

/* GET LogIn page. */
router.get('/login', (req, res, next)=> {
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
          return res.status(200).send({message:'Login success', data:user})
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
    database.addUser((err, result)=> {
      const newUser = {       
        id: result.length + 1,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        TimeStamp: new Date(),
        Date: new Date().toLocaleDateString()
      }
      crypto.randomBytes(256, (err, buf)=> {
        //encrypt newUser
        const salt = buf.toString('hex')
        const hash = crypto.pbkdf2Sync(newUser.password, salt, 10000, 512, 'sha512').toString('hex')
        newUser.password = hash
        newUser.salt = salt
        //insert newUser        
      })
      return res.status(200).send({message:'Register success', data:newUser})           
    })
});


/* End Register page. */



/* GET DashBoard page. */
router.get('/dashboard', (req, res, next)=> {
   return res.render('./dashboard/dashboard', { title: 'Dashboard' });
  });


/* End DashBoard page. */



export default router