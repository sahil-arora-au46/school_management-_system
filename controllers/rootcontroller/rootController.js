const path = require("path")
const login = (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/login/login.html"))
    console.log(path.join(__dirname, "../../"))

}
module.exports = login