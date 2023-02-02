const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [8, "Room name must have at least 8 characters"]
    },
    passKey: {
        type: String,
        required: [true, "Passkey is required"],
        minLength: [4, "Passkey must be at least 4 characters long"]
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    membersJoined: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
})

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;