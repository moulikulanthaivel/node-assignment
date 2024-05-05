import express from "express";
import Employee from "../Model/employee.js";

let apiRouter = express.Router()

apiRouter.get("/",(req,resp)=>{
    resp.send("api root")
})

apiRouter.get("/read", async(req,resp)=>{
 let employees = await Employee.find()
 resp.status(200).json(employees)
})

apiRouter.post("/create",(req,resp)=>{
    let {id,name,email,salary} = req.body
let employee = new  Employee({id,name,email,salary})
console.log(employee);
employee.save()
resp.send({"msg":"created successfully", "employee":employee})
})

apiRouter.put("/update/:id",async(req,resp)=>{
    let eid = req.params.id
    console.log(eid);
    let {id,name,email,salary} = req.body
    let filter = {id:eid}
    let result = await Employee.findOneAndUpdate(filter,{id,name,email,salary}) 
    console.log(typeof result);
    resp.status(200).json(result)
})

export default apiRouter