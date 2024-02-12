const Room = require('../models/Room');

// Controller methods for Room management
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


exports.createRoom = async (req, res) => {
    const { name, capacity, description } = req.body;

    try {
        const newRoom = new Room({ name, capacity, description });
        await newRoom.save();
        res.json(newRoom);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Implement other CRUD operations for Room as needed
