import express from 'express'

const router = express.Router()

/* GET Register page. */
router.get('/', (req, res, next) => {
    return res.render('./auth/register', { title: 'Register' });
});

export default router