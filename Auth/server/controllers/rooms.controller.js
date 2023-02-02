const Room = require("../models/rooms.model");

module.exports = {
    findAll: (req, res) => {
        Room.find()
            .then(allRooms => res.json(allRooms))
            .catch(err => res.status(400).json(err))
    }
}