const { Router } = require("express");
const rootRouter = new Router();
const login = require("../../controllers/rootcontroller/rootController");

rootRouter.get("/", login)
module.exports = rootRouter