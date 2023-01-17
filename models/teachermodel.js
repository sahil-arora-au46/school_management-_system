const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    class: [{
        type: String,
        required: true
    }],
    isClassIncharge: {
        type: String,
        // default: false
    }
});
const teacherModel = mongoose.model("teachers", teacherSchema)
module.exports = {
    teacherModel
}