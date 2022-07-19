import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next)=> {
   return res.render('./dashboard/dashboard', { title: 'Dashboard' });
  });


export default router