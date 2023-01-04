const mongoose = require("mongoose");
const { Schema } = mongoose;
let { checkSpace } = require("../validators/stuValidators")
const studentSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: checkSpace,
            message: 'You must start with letter.'
        }
    },
    class: {

    }


})