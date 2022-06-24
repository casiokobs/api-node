import express from "express";
import UserController from "../controller/usersController.js";

const router = express.Router();

router
  .get("/user", UserController.listarUser)
  .get("/user/:id", UserController.listarUserPorId)
  .post("/user", UserController.cadastrarUser)
  .put("/user/:id", UserController.atualizarUser)
  .delete("/user/:id", UserController.excluirUser)

export default router;   