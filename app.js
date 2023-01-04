const express = require("express");
const authRouter = require("./routes/authrouter");
const connectDB = require("./confiDB");
const cookieParser = require("cookie-parser");
const port = 8989;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/", authRouter)



app.listen(port, (error) => {
    if (!error) {
        console.log("chalu ho gaya me khush ho ja ");
        connectDB();
    } else {
        console.log("nahi hu start")
    }
})