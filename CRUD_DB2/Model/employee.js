import mongoose from "mongoose";

let emp_schema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

let Employee =mongoose.model("employee",emp_schema)

export default Employee