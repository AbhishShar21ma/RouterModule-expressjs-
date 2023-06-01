import express from "express";
const router = express.Router();

router.get("/students/home", (req, res) => {
  res.send("This is the home page students section");
});
router.post("/students/post", (req, res) => {
  res.send("This is the post page students section");
});
router.put("/students/update", (req, res) => {
  res.send("This is the update page students section");
});
router.delete("/students/delete", (req, res) => {
  res.send("This is the delete page students section");
});

export default router;
