const mongoose = require("mongoose");
const { Schema } = mongoose;
let { checkSpace } = require("../validators/stuValidators")
const studentSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: checkSpace,
            message: 'You must start with letter.'
        },
        required: true
    },
    class: {
        type: String,
        enumValues: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"],
        required: true

    },
    section: {
        type: String,
        required: true
    },
    rollnumber: {
        type: Number,
        required: true
    },
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: "attendance" }]

})
const studentModel = mongoose.model("students", studentSchema);
module.exports = {
    studentModel
}