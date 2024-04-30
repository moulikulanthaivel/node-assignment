import express from "express";
import fs from "fs";

let apiRouter = express.Router();

apiRouter.get("/", (req, resp) => {
  resp.send("api root value");
});

apiRouter.get("/read", (req, resp) => {
  console.log("read inside successfully");
  let employees = getEmployee();
  console.log(employees);
});

apiRouter.post("/create", (req, resp) => {
  console.log(`insert create employee api`);
  let emp = req.body;
  console.log(emp);
  let employees = getEmployee();
  let flag = employees.find((employee) => {
    return employee.id == emp.id;
  });
  if (flag) {
    return resp.send("employee existing already");
  }
  employees.push(emp);
  saveEmployee(employees);
  return resp.send("employee created successfully");
});

apiRouter.put("/update/:id", (req, resp) => {
  let eid = req.params.id;
  console.log(eid);
  let employees = getEmployee();
  let flag = employees.find((emp) => {
    return emp.id == eid;
  });
  console.log(flag);
});

let getEmployee = () => {
  let data = fs.readFileSync("emp.json", "utf-8");
  return JSON.parse(data);
};

let saveEmployee = (employees) => {
  fs.writeFile("emp.json", JSON.stringify(employees), (err) => {
    if (err) throw err;
  });
};

export default apiRouter;
