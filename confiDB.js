const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://sahil:Bimla8950@sahil.suz4afh.mongodb.net/?retryWrites=true&w=majority"
let connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, { dbName: "SMS" })
        console.log("db connected");
    } catch (error) {
        console.log("ghanta nahi hua dubara kar " + `\n${error}`)
        process.kill()
    }
}
module.exports = connectDB;