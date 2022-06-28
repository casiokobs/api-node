import express from "express";
import TasksController from "../controller/tasksController.js";

const router = express.Router();

router
  .get("/api/v1/task", TasksController.listTask)
  .get("/api/v1/task/:id", TasksController.listTaskById)
  .post("/api/v1/task", TasksController.addTask)
  .put("/api/v1/task/:id", TasksController.updateTask)
  .delete("/api/v1/task/:id", TasksController.deleteTask)

export default router;   