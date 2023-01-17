const { Router } = require("express");
const studentRouter = new Router();
const { data, add, edit, remove } = require("../controllers/studentController")


// -----------------curd----for----admin---------------
studentRouter.get("/:id", data)
studentRouter.post("/add", add);
studentRouter.put("/edit/:studentID", edit);
studentRouter.delete("/delete", remove)

module.exports = {
    studentRouter
}