
import express from 'express'
import * as database from '../../models/private/models_private'


const router = express.Router()
const middleware = require('../middleware/middleLog')


// router.post('/register', database.createUser, (req, res, next) => {
//   if (err) {
//     next(err)
//   } else {
//     return res.json({
//       status: 200,
//       message: 'OK',
//       data: req.body
//     })
//   }
// });

/* End Register page. */

/* GET DashBoard page. */
router.get('/dashboard', middleware.authLogger, (req, res, next) => {
  return res.render('./dashboard/dashboard', { title: 'DashBoard' });
});


/* End DashBoard page. */

/* GET DashBoard page. */
router.get('/opd', (req, res, next) => {
  return res.render('./opd/opd', { title: 'OPD' });
});


/* End DashBoard page. */

export default router