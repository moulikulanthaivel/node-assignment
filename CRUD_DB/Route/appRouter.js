import express from "express"
import Employee from "../Model/employee.js"
const appRouter = express.Router()

appRouter.get("/",  (req,res)=>{
 res.send("HELLO API REQUEST")
})

appRouter.get("/read", async (req,resp)=>{
    let employees = await Employee.find()
    resp.status(200).json(employees)
})

appRouter.post("/create",(req,resp)=>{
    let {id,name,email,salary} = req.body
    let employee = new Employee({id,name,email,salary})
    console.log(employee)
    employee.save()
resp.send({"msg" : "Employeed created successfully" , "employee":employee})
})

appRouter.put("/update/:id", (req,resp)=>{
    let eid = req.params.id
    console.log(eid)
    let {id,name,email,salary} = req.body
   console.log(name);
let filter = {id:eid}
let result =  Employee.findOneAndUpdate(filter,{id,name,email,salary},{new : true})
})
// console.log(typeof result);
resp.status(200).json(result)



export default appRouter