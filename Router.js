import express from "express";
//importing router modules
import stu from "./Routermodules/student.js";
import tea from "./Routermodules/teachers.js";
const app = express();
const port = 3000;
//load router modules
app.use("/vidyarthi", stu);
app.use("/adhyapak", tea);

app.get("/", (req, res) => {
  res.send("This is first hello world program");
});
app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
