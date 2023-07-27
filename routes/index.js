const express = require('express');
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');
const reactionRoutes = require('./api/reactionRoutes');
const friendRoutes = require('./api/friendRoutes');

const router = express.Router();

router.use('/api', userRoutes);
router.use('/api', thoughtRoutes);
router.use('/api', reactionRoutes);
router.use('/api', friendRoutes);

module.exports = router;