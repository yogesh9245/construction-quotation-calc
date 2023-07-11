const mongoose = require('mongoose')

const {Schema} = mongoose;

const AppointmentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    ContractorName:{
        type:String
    }
});

module.exports = mongoose.model('Appointments',AppointmentSchema)