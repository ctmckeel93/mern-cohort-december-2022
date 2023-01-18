const mongoose = require("mongoose");

const DojoSchema = new mongoose.Schema(
    {
        name: String,
        ninjas: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Ninja",
        },
    },
    { timestamps: true }
);

const Dojo = mongoose.model("Dojo", DojoSchema);
module.exports = Dojo;
