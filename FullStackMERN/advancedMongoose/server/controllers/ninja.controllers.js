const Ninja = require("../models/ninja.models");
const Dojo = require("../models/dojo.models");

module.exports = {
    findAll: (req, res) => {
        Ninja.find()
            .populate("dojo")
            .then((allNinjas) => res.json(allNinjas))
            .catch((err) =>
                res.json({
                    message: "Something went wrong finding all Ninjas",
                    error: err,
                })
            );
    },
    findOne: (req, res) => {
        Ninja.findById(req.params.id)
            .populate("dojo")
            .then((ninja) => res.json(ninja))
            .catch((err) =>
                res.json({
                    message:
                        "Something went wrong finding a ninja, check params",
                    error: err,
                })
            );
    },
    create: (req, res) => {
        Ninja.create(req.body)
            .then((newNinja) => {
                Dojo.findByIdAndUpdate(newNinja.dojo, {
                    $push: { ninjas: newNinja._id },
                })
                    .then(() =>
                        console.log(
                            "Successfully added new ninja to Dojo.ninjas"
                        )
                    )
                    .catch((err) =>
                        res.json({
                            message:
                                "Something went wrong finding dojo in Ninja.create()",
                            error: err,
                        })
                    );
                res.json(newNinja);
            })
            .catch((err) =>
                res.json({
                    message: "Something went wrong creating a new Ninja",
                    error: err,
                })
            );
    },
};
