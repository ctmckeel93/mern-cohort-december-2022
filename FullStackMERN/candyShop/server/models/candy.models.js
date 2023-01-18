const mongoose = require("mongoose");

const CandySchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
    },
    { timestamps: true }
);

const Candy = mongoose.model("Candy", CandySchema);
module.exports = Candy;
