const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const testSchema = new Schema({
    name: String,
    password: String,
    role: String
})
let testMOdel = mongoose.model("users", testSchema);
module.exports = {
    testMOdel
}