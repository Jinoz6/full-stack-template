import express from 'express'

const router = express.Router()

/* GET LogIn page. */
router.get('/', (req, res, next) => {
    return res.render('./auth/login', { title: 'Login' });
});

export default router