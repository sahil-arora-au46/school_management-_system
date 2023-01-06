const mongoose = require("mongoose");
const { Schema } = mongoose;
const attendanceSchema = new Schema({
    attendance: {
        type: Boolean,
        required: true
    }
    ,
    date: {
        type: date,
        default: Date.now
    },
    studentID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "students"
    }
})
const attendanceModel = mongoose.model("attendance", attendanceSchema)
module.exports = {
    attendanceModel
}
