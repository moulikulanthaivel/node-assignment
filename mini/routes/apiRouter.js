import express from "express"
import fs from "fs"



let apiRouter = express.Router()

apiRouter.get("/",(req,resp)=>{
    resp.send("api root value")
})


apiRouter.get("/read",(req,resp)=>{
    console.log("read inside successfully");
    let employees= getEmployee()
    console.log(employees);
})


apiRouter.post("/create",(req,resp)=>{
    console.log(`insert create employee api`);
    let emp = req.body
    console.log(emp);
})


let getEmployee = ()=>{
    let data= fs.readFileSync("emp.json","utf-8")
    return JSON.parse(data)
}


export default apiRouter