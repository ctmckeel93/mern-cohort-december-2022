const Dojo = require("../models/dojo.models");

module.exports = {
    findAll: (req, res) => {
        Dojo.find()
            .populate("ninjas")
            .then((allDojos) => res.json(allDojos))
            .catch((err) =>
                res.json({
                    message: "Something went wrong finding all Dojos",
                    error: err,
                })
            );
    },
    findOne: (req, res) => {
        Dojo.findById(req.params.id)
            .populate("ninjas")
            .then((dojo) => res.json(dojo))
            .catch((err) =>
                res.json({
                    message: "Something went wrong finding a Dojo",
                    error: err,
                })
            );
    },
    create: (req, res) => {
        Dojo.create(req.body)
            .then((newDojo) => res.json(newDojo))
            .catch((err) =>
                res.json({
                    message: "Something went wrong creating a Dojo",
                    error: err,
                })
            );
    },
};
