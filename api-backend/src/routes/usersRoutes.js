import express from "express";
import UserController from "../controller/usersController.js";

const router = express.Router();

router
  .get("/api/v1/user", UserController.listUser)
  .get("/api/v1/user/:id", UserController.listUserById)
  .post("/api/v1/user", UserController.addUser)
  .put("/api/v1/user/:id", UserController.updateUser)
  .delete("/api/v1/user/:id", UserController.deleteUser)

export default router;   