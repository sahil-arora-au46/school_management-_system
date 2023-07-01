const { Router } = require("express");
const {data,add,edit,remove} = require("../../controllers/notificationController")
const notifiROuter = new Router();
notifiROuter.get("/all",data);
notifiROuter.post("/add",add);
notifiROuter.put("/edit/:id",edit);
notifiROuter.delete("/remove/:id",remove);

module.exports = notifiROuter