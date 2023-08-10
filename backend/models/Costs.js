const mongoose = require('mongoose')

const {Schema} = mongoose;

const Costs = new Schema({
    city:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    labour:{
        type:Number,
        required:true
    },
    equipment:{
        type: Number,
        required: true
    },
    electricity:{
        type: Number
    },
    watersupply:{
        type:Number
    },
    rawMaterial:{
        type:Number
    }
});

module.exports = mongoose.model('Costs',Costs)