const router = require("express").Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./Controllers/Todo");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

// Crud de ToDo
router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

module.exports = router;
