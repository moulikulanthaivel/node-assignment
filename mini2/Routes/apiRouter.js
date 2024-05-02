import express from "express";
let apiRouter = express.Router();
import fs from "fs";

apiRouter.get("/", (req, resp) => {
  resp.send("api root");
});

apiRouter.get("/read", (req, resp) => {
  let employees = getEmployees();
  console.log(employees);
  resp.status(200).json(employees);
});

apiRouter.post("/create", (req, resp) => {
  console.log(`inside api successfully`);

  let emp = req.body;
  console.log(emp);
  let employees = getEmployees();

  let flag = employees.find((employee) => {
    return employee.id == emp.id;
  });
  console.log(flag);
  if (flag) {
    return resp.send(`Msg : Employee exist already`);
  }
  employees.push(emp);
  saveEmployees(employees);
  return resp.send(`msg : Employee created succsessfully`);
});


apiRouter.put("/update/:id", (req,resp)=>{
    let eid = req.params.id
    console.log(eid);
    let employees = getEmployees()
    let flag = employees.find((employee)=>{
        return employee.id == eid
    })
    console.log(flag);
    if(!flag){
        return resp.send("msg : Employee NOT exist")
    }
    let remain_Emp = employees.filter((emp)=>{
        return emp.id != eid
    })
    console.log(remain_Emp);
    remain_Emp.unshift(req.body)
    console.log(remain_Emp);
    saveEmployees(employees);
    return resp.send(  `msg : object upadte succes`)
})


apiRouter.delete("/delete/:id",(req,resp)=>{
    let eid = req.params.id
    console.log(eid);
    let employees = getEmployees()
    let flag = employees.find((employee)=>{
        return employee.id ==  eid
    })
    console.log(flag);
    if(!flag){
        return resp.send("emp not exists")
    }
    let remain_Emp =employees.filter((emp)=>{
        return emp.id != eid;
    })
    console.log(remain_Emp);
    saveEmployees(employees)
    return resp.send(`msg : Employee object deleted`)
})


let getEmployees = () => {
  let data = fs.readFileSync("emp.json", "utf-8");
  return JSON.parse(data);
};

let saveEmployees = (employees) => {
  fs.writeFileSync("emp.json", JSON.stringify(employees));
};
export default apiRouter;
