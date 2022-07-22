import express from 'express'
import * as TestDb from '../../models/api/Test'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next)=> {    
    return res.json({ 'message': 'Connect Api Success.' })
  });

router.get('/users', (req, res, next)=> {    
    TestDb.getUsers((err, result) => {
        if (err) {

            next(err)
        } else {

            return res.json({
                status: 200,
                message: 'OK', 
                data: result
            })
            
        }

    })
  });

export default router