const { Router } = require("express");
const path = require("path")
const dashboard = new Router();
dashboard.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/dashbord.html"))
});
module.exports = dashboard;