const Dog = require("../models/dog.model");

module.exports = {
    findAll: (req, res) => {
        Dog.find()
            .then((allDogs) => res.json(allDogs))
            .catch((err) =>
                res.json({
                    message: "Something went wrong with Dog.find()",
                    error: err,
                })
            );
    },
};
