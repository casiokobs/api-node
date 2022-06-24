import express from "express";
import TasksController from "../controller/tasksController.js";

const router = express.Router();

router
  .get("/task", TasksController.listarTask)
  .get("/task/:id", TasksController.listarTaskPorId)
  .post("/task", TasksController.cadastrarTask)
  .put("/task/:id", TasksController.atualizarTask)
  .delete("/task/:id", TasksController.excluirTask)

export default router;   