const { Router } = require("express");
const { login, logout } = require("../controllers/authcontrollers")
let authRouter = new Router();
authRouter.post('/login', login);
authRouter.get("/logout", logout)
module.exports = authRouter;



