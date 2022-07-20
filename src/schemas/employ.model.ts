import mongoose from "mongoose";


const employSchema =new mongoose.Schema({
    ma:Number,
    ten:String,
    tuoi:Number,
    luong:Number,
    phongban:{type:mongoose.Schema.Types.ObjectId,ref:"Branch"},
})

const Employ=mongoose.model('Employ',employSchema)

export {Employ}