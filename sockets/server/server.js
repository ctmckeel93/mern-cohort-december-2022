const express = require("express");
const app = express();
const socketio = require('socket.io');
const cors = require("cors")
const port = 8000;

app.use(cors())

const server = app.listen(port, () => console.log("Listening on port", port))

const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("New socket:", socket.id);
    console.log("Established socket on the server");

    socket.on("message_from_client", (data) => {
        console.log("Data from client", data);
        io.emit("data_returned_from_server", data)
    })

    socket.on("sending_message", (data) => {
        console.log("Message:", data);
        io.emit("sending_to_client", data);
    })

})
