const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Routes for admin functionalities
router.get('/bookings', adminController.getAllBookings);
router.get('/rooms', adminController.getAllRooms);
router.get('/users', adminController.getAllUsers);

module.exports = router;
