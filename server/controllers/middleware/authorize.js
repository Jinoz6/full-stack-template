// import express from 'express'
// const router = express.Router()
// //import user from '../controllers/api/user'
import * as db from '../../models/api/models_api'


export const userRole = (req, res, next) => {
 db.getRole((err, getRole) => {     
    const user = req.body.role
    
  });
}