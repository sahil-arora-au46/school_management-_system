const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://hrithik:Hri805120@simplesa.uks0psm.mongodb.net/?retryWrites=true&w=majority"
let connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, { dbName: "sms" })
        console.log("db connected");
    } catch (error) {
        console.log("ghanta nahi hua dubara kar " + `\n${error}`)
        process.kill()
    }
}
module.exports = connectDB;