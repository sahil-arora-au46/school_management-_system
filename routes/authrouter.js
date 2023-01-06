const { Router } = require("express");
const { login, logout } = require("../controllers/authcontrollers")
let authRouter = new Router();
authRouter.post('/login', login);
authRouter.post("/logout", logout)
module.exports = authRouter;



