const router = require('express').Router();

// get the api routes
const userRoutes = require('./userApiRoutes');
const chatRoutes = require('./chatApiRoutes');

// mount the routes to appropriate api endpoint
router.use('/users', userRoutes);
router.use('/chat', chatRoutes);

module.exports = router;