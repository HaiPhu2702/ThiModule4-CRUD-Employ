import mongoose from "mongoose";


const branchSchema =new mongoose.Schema({
    ten:String,
})

const Branch=mongoose.model('Branch',branchSchema)

export {Branch}