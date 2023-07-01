const { userModel } = require("../models/usermodel");
const { teacherModel } = require("../models/teachermodel");
const { studentModel } = require("../models/studentmodel");
const jwt = require("jsonwebtoken");
let SECRET_KEY = "test"
const login = async (req, res) => {
    const token = req.cookies.jwt;
    console.log("hi from auth", req.body)
    const { name, password } = req.body;

    // console.log(Object.keys(jwt.verify(token, name)).length)
    if (token) {
        //cokie parser
        //condition to check role
        //re direct as per role

        const userInfo = jwt.verify(token, SECRET_KEY);
        console.log("userinfo", userInfo)
        try {
            if (userInfo.role == "admin") {
                res.redirect('/adminpage')
                return

            }
            else if (userInfo.role == "teacher") {
                const id = userInfo.userId
                const teacher = await teacherModel.findById(id)

                res.render('dashb.ejs', {
                    user: teacher.name, pone: "Subject:", ptwo: "Classes:", pthree: ""
                    , p1val: `${teacher.subject}`, p2val: `${teacher.class}`, p3val: ``
                })
                return
            }
            else {
                let id = userInfo.userId
                const student = await studentModel.findById(id)
                res.render('dashb.ejs', {
                    user: student.name, pone: "Grade:", ptwo: "Section:", pthree: "Roll No:"
                    , p1val: `${student.class}`, p2val: `${student.section}`, p3val: `${student.rollnumber}`
                })
                return
            }
        } catch (error) {
            res.status(500).send({ status: "error", error })
        }
        // res.send("bhai phir se login karre ga kya")
    } else {

        try {

            const user = await userModel.findOne({ name });
            console.log(user, name);
            if (Object.keys(user).length === 0) {

                res.status(404).send({ status: "error", msg: "user not found" })
                return
            }
            console.log(user.password, user.name, password, user._id);
            if (user.password !== password) {
                res.status(401).send({ status: "failed", msg: "Invalid Password" })
                return
            }
            const payload = { name, role: user.role, id: user._id }
            console.log(user._id, user.name, "bhai dekh")
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
                let id = user.userId
                const teacher = await teacherModel.findById(id)
                res.render('dashb.ejs', {
                    user: teacher.name, pone: "Subject:", ptwo: "Classes:", pthree: ""
                    , p1val: `${teacher.subject}`, p2val: `${teacher.class}`, p3val: ``
                })
                return
            } else if (user.role === "student") {
                let id1 = user.userId
                const stu = await studentModel.findById(id1)
                console.log(stu, "naya error", id1)
                res.render('dashb.ejs', {
                    user: stu.name, pone: "Grade:", ptwo: "Section:", pthree: "Roll No:"
                    , p1val: `${stu.class}`, p2val: `${stu.section}`, p3val: `${stu.rollnumber}`
                })
                return
            }
        } catch (error) {
            console.log("BHAI YE NAHI CHALA")
            res.status(500).send({ status: "error", error })
        }
    }

};
const logout = (req, res) => {
    console.log("me dba")
    res.cookie('jwt', '', { maxAge: 1 })
    // window.location.href = "local"
    return res.redirect('/')
    // res.send({ status: 'success', msg: 'Logged Out Successfully' })
};
module.exports = {
    login,
    logout
}
