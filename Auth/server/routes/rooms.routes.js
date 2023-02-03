const RoomController = require('../controllers/rooms.controller');
const {authenticate} = require("../config/jwt.config");
module.exports = (app) => {
    app.get("/api/rooms", authenticate, RoomController.findAll );
    app.get('/api/rooms/:id', authenticate, RoomController.find);
    app.post('/api/rooms', authenticate, RoomController.create );
    app.put('/api/rooms/add/:id', authenticate, RoomController.addUser);
    app.put('/api/rooms/remove/:id', authenticate, RoomController.removeUser);
    app.delete('/api/rooms/:id/:userid', authenticate, RoomController.delete);

}