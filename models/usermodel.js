const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
    role: String,
    userID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "students"
    }
})
let userModel = mongoose.model("users", userSchema);
module.exports = {
    userModel
}