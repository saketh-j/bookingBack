const Booking = require('../models/Booking');
const Room = require('../models/Room');
const User = require('../models/User');

// Controller methods for admin functionalities
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user', 'username email').populate('room', 'name');
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
