const express = require("express");
const path = require("path");
const authRouter = require("./routes/authrouter");
const { userRouter } = require("./routes/userroutes");
const { teacherRouter } = require("./routes/teacherRoutes");
const { studentRouter } = require("./routes/studentRoutes");
const connectDB = require("./confiDB");
const cookieParser = require("cookie-parser");
const port = 8989;
const app = express();
app.use(express.static(path.join(__dirname, "public/admin")));
app.use(express.static("./public/student"));
app.use(express.static("./public/teacher"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", authRouter);

// app.use("/user", userRouter);
// app.use("/student", studentRouter);
// app.use("/teacher", teacherRouter);



app.listen(port, (error) => {
    if (!error) {
        console.log("chalu ho gaya me khush ho ja ");
        connectDB();
    } else {
        console.log("nahi hu start")
    }
})