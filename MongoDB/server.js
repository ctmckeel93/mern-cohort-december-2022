const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/my_ninjas", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Succesfully connected to database"))
    .catch((err) =>
        console.log("Something wrong connecting to the database", err)
    );

const NinjaSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
        },
    },
    { timestamps: true }
);

const Ninja = mongoose.model("Ninja", NinjaSchema);
