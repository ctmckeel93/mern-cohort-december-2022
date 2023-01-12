const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/dogs", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => console.log("Successfully connected to database"))
    .catch((err) =>
        console.log("something went wrong connecting to the database", err)
    );
