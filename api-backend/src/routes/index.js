import express from "express";
import users from "./usersRoutes.js"
import tasks from "./tasksRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    tasks,
    users
  )
}

export default routes