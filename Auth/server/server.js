const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const socketio = require('socket.io')
const app = express();
const port = 8000;

require('dotenv').config();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config')
const UserRoutes = require('./routes/users.routes')
const RoomRoutes = require('./routes/rooms.routes');
UserRoutes(app);
RoomRoutes(app);

const server = app.listen(port, () => console.log("Listening on port", port));

const io = socketio(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ['*'],
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("Socket:", socket.id, "connected to the server");
    socket.on("send_message", (data) => {
        console.log(data);
        io.emit("message_received", data)
    })

    socket.on("join_room", (data) => {
        console.log("Joined room:", data);
        socket.join(data)
    })

    socket.on("private_message", (data) => {
        console.log(data);
        io.to(data.room).emit("private_message_response", data)
    })
})