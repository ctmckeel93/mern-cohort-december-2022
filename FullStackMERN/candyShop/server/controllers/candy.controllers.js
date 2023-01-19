const Candy = require("../models/candy.models");

module.exports = {
    findAll: (req, res) => {
        Candy.find()
            .then((allCandies) => res.json(allCandies))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    findOne: (req, res) => {
        Candy.findById(req.params.id)
            .then((candy) => res.json(candy))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    create: (req, res) => {
        Candy.create(req.body)
            .then((newCandy) => res.json(newCandy))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    update: (req, res) => {
        Candy.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then(updatedCandy => res.json(updatedCandy))
            .catch(err => res.json({message: "Something went wrong with updating candy", error: err}))
    },
    delete: (req, res) => {
        Candy.findByIdAndDelete(req.params.id)
            .then(deletedCandy => res.json(deletedCandy))
            .catch(err => res.json({message: "Something went wrong deleting", error: err}))
    }
};
