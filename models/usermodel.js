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
        enumValues: ["students", "teachers"],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: `role`,
        default: mongoose.Types.ObjectId()

    }
}, {
    versionKey: false
})
let userModel = mongoose.model("users", userSchema);
module.exports = {
    userModel
}