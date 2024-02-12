const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const roomController = require('../controllers/roomController');

// Define routes
router.get('/', roomController.getAllRooms);
router.post('/', roomController.createRoom);
router.get('/:id', roomController.getRoomById);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

module.exports = router;
