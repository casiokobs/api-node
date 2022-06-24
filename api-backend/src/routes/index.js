import express from "express";
import users from "./usersRoutes.js"
import tasks from "./tasksRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    //res.status(200).send({titulo: "Api"})
    res.render('index');
  })

  app.set('view engine', 'ejs');
  app.set('views','../api-frontend/views');

  app.use(
    express.json(),
    tasks,
    users
  )
}

export default routes