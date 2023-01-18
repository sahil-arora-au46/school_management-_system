const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const classesSchema = new Schema({
    class: {
        type: String,
        enumValues: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"],
        required: true

    },
    section: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "students",
        required: true
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "students",
        required: true
    }]
})
const classesModel = new mongoose.model("classes", classesSchema);
module.exports = {
    classesModel
}

