const { userModel } = require("../models/usermodel");
const jwt = require("jsonwebtoken");
let SECRET_KEY = "test"
const login = async (req, res) => {
    const token = req.cookies.jwt;
    const { name, password } = req.body;

    // console.log(Object.keys(jwt.verify(token, name)).length)
    if (token) {
        //cokie parser
        //condition to check role
        //re direct as per role

        const userInfo = jwt.verify(token, SECRET_KEY);
        console.log(userInfo)
        try {
            if (userInfo.role == "admin") {
                return res.redirect('/adminpage')

            }
            else return res.redirect("/dashboard");


        } catch (error) {
            res.status(500).send({ status: "error", error })
        }
        // res.send("bhai phir se login karre ga kya")
    } else {

        try {
            const user = await userModel.findOne({ name });
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
                try {
                    return res.redirect('/adminpage')
                } catch (error) {
                    consolele.log(error)
                }
            }
            else if (user.role === "teacher") {
                return res.redirect('/dashbord')
            } else if (user.role === "student") {
                return res.redirect('/dashbord')
            }
        } catch (error) {
            res.status(500).send({ status: "error", error })
        }
    }

};
const logout = (req, res) => {
    console.log("me dba")
    res.cookie('jwt', '', { maxAge: 1 })
    // window.location.href = "local"
    // res.redirect('/')
    res.send({ status: 'success', msg: 'Logged Out Successfully' })
};
module.exports = {
    login,
    logout
}
