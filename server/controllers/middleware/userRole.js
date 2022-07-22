
import express from 'express'

const jwt = require('jsonwebtoken');
const router = express.Router()

export const validateRegister = (req, res, next) => {
    if (req.body.username === '' || req.body.password === '') {
        res.json({
            status: 400,
            message: 'All fields are required'
        })
        return res.end()
        
    }
    next()
}










