import mongoose from "mongoose"

let Emp_schema = mongoose.Schema({
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

    id:{
        type:Number,
        required:true
    }
})

let Employee = mongoose.model("employee",Emp_schema)

export default Employee