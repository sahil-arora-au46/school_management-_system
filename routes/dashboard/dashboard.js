const { Router } = require("express");
const path = require("path")
const dashboard = new Router();
dashboard.get("/dashboard", (req, res) => {
    let name = 'sahil'
    console.log("bhai smjh aaya ")
    res.render('dashb.ejs', { user: name })
});

module.exports = dashboard;