const NinjaController = require("../controllers/ninja.controllers");

module.exports = (app) => {
    app.get("/api/ninjas", NinjaController.findAll);
    app.get("/api/ninjas/:id", NinjaController.findOne);
    app.post("/api/ninjas", NinjaController.create);
};
