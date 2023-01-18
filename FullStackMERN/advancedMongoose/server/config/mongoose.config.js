const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/dojosandninjas", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to the database"))
    .catch((err) =>
        console.log("Something went wrong connecting to the db", err)
    );
