const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    subject: {
        type: String,
        required: true
    },
    classID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "classes",
        required: true
    }
});

const homeworkModel = mongoose.model('homeworks', homeworkSchema);
module.exports = {
    homeworkModel
}