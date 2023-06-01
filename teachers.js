import express from "express";
const router = express.Router();

router.get("/teachers/home", (req, res) => {
  res.send("This is the home page teachers section");
});
router.post("/teachers/post", (req, res) => {
  res.send("This is the home page students teacherssection");
});
router.put("/teachers/update", (req, res) => {
  res.send("This is the home page studentsteachers section");
});
router.delete("/teachers/delete", (req, res) => {
  res.send("This is the home page studentsteachers section");
});

export default router;
