const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    },
    role: {
        type: String,
        enumValues: ["student", "teacher"],
        required: true
    },
    userId: {
        type: String,
        default: null
    }
}, {
    versionKey: false
})
let userModel = mongoose.model("users", userSchema);
module.exports = {
    userModel
}