import express from 'express'
import * as TestDb from '../../models/api/Test'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next)=> {
    return res.json({ 'message': 'Connect Api Success.' })
  });

router.get('/test-db', (req, res, next)=> {
    TestDb.all((err, result) => {

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