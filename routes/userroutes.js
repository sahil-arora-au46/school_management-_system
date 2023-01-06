const { Router } = require("express");
const userRouter = new Router();
const { data, add, edit, remove } = require("../controllers/userController")


// -----------------curd----for----admin---------------
userRouter.get("/data", data)
userRouter.post("/add", add);
userRouter.put("/edit", edit);
userRouter.delete("/delete", remove)

module.exports = {
    userRouter
}