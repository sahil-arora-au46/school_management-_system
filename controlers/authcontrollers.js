const { testMOdel } = require("../modles/users");
const jwt = require("jsonwebtoken");
let SECRET_KEY = "test"
const login = async (req, res) => {
    const token = req.cookies.jwt;
    const { name, password } = req.body;
    // console.log(Object.keys(jwt.verify(token, name)).length)
    if (token) {
        console.log(token)

        const userInfo = jwt.verify(token, SECRET_KEY);

        res.send("bhai phir se login karre ga kya")
    } else {

        try {
            const user = await testMOdel.findOne({ name });
            // console.log(user);
            if (!user.name) {
                res.status(404).send({ status: "error", msg: "user not found" })
                return
            }
            // console.log(user.password, user.name, password, user._id);
            if (user.password !== password) {
                res.status(401).send({ status: "failed", msg: "Invalid Password" })
                return
            }
            const payload = { name, role: user.role, id: user._id }

            const token = jwt.sign(payload, SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' });
            res.cookie("jwt", token, { maxAge: 24 * 60 * 60 })
            if (user.role === "admin") {
                res.send("hi from admin")
            }
            else if (user.role === "teacher") {
                res.send("hi from teacher")
            } else if (user.role === "student") {
                res.send("hi from student")
            }
        } catch (error) {
            res.status(500).send({ status: "error", error })
        }
    }

};
const logout = (req, res) => {
    console.log("me dba")
    res.cookie('jwt', '', { maxAge: 1 })
    window.location = "http://127.0.0.1:5500/school_management-_system/public/login.html"
    res.send({ status: 'success', msg: 'Logged Out Successfully' })
};
module.exports = {
    login,
    logout
}
