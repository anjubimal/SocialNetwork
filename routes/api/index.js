const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/thoughts', userRoutes);
router.use('/users', thoughtRoutes);

module.exports = router;