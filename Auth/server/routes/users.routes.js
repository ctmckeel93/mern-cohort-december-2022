const UserController = require('../controllers/users.controller');

module.exports = (app) => {
    app.get("/api/users", UserController.findAll)
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/logout", UserController.logout)
    
}