const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    dojo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dojo",
        required: [true, "Dojo field is required"],
    },
});

const Ninja = mongoose.model("Ninja", NinjaSchema);
module.exports = Ninja;
