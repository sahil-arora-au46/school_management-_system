const express = require("express");
const path = require("path");
const ejs = require('ejs')
const authRouter = require("./routes/authrouter");
const { userRouter } = require("./routes/userRoutes");
const { teacherRouter } = require("./routes/teacherRoutes");
const { studentRouter } = require("./routes/studentRoutes");
const adminDash = require("./routes/dashboard/adminDash");
const rootRouter = require("./routes/rootroute/rootRoute");
const dashboard = require("./routes/dashboard/dashboard")
const notifiROuter = require('./routes/notification/notificationRoutes')
const connectDB = require("./confiDB");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const port = 2222;
const app = express();
app.set('view engine', 'ejs')
// Parse JSON bodies
app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/admin"));
app.use(express.static("public/image"));
// app.use(express.static("./public/student"));
// app.use(express.static("./public/teacher"));
// app.use(express.static('./views'))
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("./public"))
app.use(express.static("./public/login"))
app.use(express.static("./public/notification"))
app.use(express.static("./public/adminpage"))
app.use(express.static("./public/homework"))
app.use(express.static("./public/result"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", authRouter);
app.use("/", rootRouter)
app.use("/", adminDash)
app.use("/", dashboard)
app.use("/user", userRouter)
app.use('/student', studentRouter)
app.use('/teacher', teacherRouter)
app.use('/notification', notifiROuter)

app.get('/notification', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notification/notification.html'))
})

app.get('/homework', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/homework/homework.html'))
})

app.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/result/result.html'))
})

app.get('/adminpage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/adminpage/admin.html'))
})
// app.get('/logout', (req, res) => {
//     console.log("j;lskjd;lkj;ljfs;ajk;l")
// })



app.listen(port, (error) => {
    if (!error) {
        console.log("chalu ho gaya me khush ho ja ");
        connectDB();
    } else {
        console.log("nahi hu start")
    }
})