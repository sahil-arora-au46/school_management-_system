const { Router } = require("express");
const teacherRouter = new Router();
const { data, add, edit, remove } = require("../controllers/studentController")


// -----------------curd----for----admin---------------
teacherRouter.get("/data", data)
teacherRouter.post("/add", add);
teacherRouter.put("/edit/:studentID", edit);
teacherRouter.delete("/delete", remove)

module.exports = {
    teacherRouter
}