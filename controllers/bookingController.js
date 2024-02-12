const Booking = require('../models/Booking');

// Controller methods for Booking management
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createBooking = async (req, res) => {
    const { user, room, date, time } = req.body;

    try {
        const newBooking = new Booking({ user, room, date, time });
        await newBooking.save();
        res.json(newBooking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Implement other CRUD operations for Booking as needed
