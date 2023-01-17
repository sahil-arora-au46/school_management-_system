const { Router } = require("express");
const path = require("path")
const adminDash = new Router();
adminDash.get("/adminpage", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/adminpage/admin.html'))
});
module.exports = adminDash;