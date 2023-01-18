const DojoController = require("../controllers/main.controller");

module.exports = (app) => {
    app.get("/api/dojos", DojoController.findAll);
    app.get("/api/dojos/:id", DojoController.findOne);
    app.post("/api/dojos", DojoController.create);
};
