const CandyController = require("../controllers/candy.controllers");

module.exports = (app) => {
    app.get("/api/candies", CandyController.findAll);
    app.get("/api/candies/:id", CandyController.findOne);
    app.post("/api/candies", CandyController.create);
    app.put("/api/candies/:id", CandyController.update);
    app.delete("/api/candies/:id", CandyController.delete)
};
