const DogController = require("../controllers/dog.controller");

module.exports = (app) => {
    app.get("/api/dogs", DogController.findAll);
};
