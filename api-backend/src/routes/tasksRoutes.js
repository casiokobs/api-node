import express from "express";
import TasksController from "../controller/tasksController.js";

const router = express.Router();

router
  .get("/api/v1/task", TasksController.listarTask)
  .get("/api/v1/task/:id", TasksController.listarTaskPorId)
  .post("/api/v1/task", TasksController.cadastrarTask)
  .put("/api/v1/task/:id", TasksController.atualizarTask)
  .delete("/api/v1/task/:id", TasksController.excluirTask)

export default router;   