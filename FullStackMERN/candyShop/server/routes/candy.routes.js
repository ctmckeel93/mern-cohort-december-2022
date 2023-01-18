const CandyController = require("../controllers/candy.controllers");

module.exports = (app) => {
    app.get("/api/candies", CandyController.findAll);
    app.get("/api/candies/:id", CandyController.findOne);
    app.post("/api/candies", CandyController.create);
};
