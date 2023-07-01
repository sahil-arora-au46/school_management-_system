const {Schema} = require('mongoose')
const mongoose = require('mongoose')
const notifiSchema = new Schema({
    data:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

const notifiModel= mongoose.model('notification',notifiSchema)

module.exports = notifiModel