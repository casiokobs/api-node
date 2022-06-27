import express from "express";
import users from "./usersRoutes.js"
import tasks from "./tasksRoutes.js";
import cors from 'cors';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.render('index');
  })
  app.route('/addUser.ejs').get((req, res) => {
    res.render('addUser');
  })

  //projeto foi começado com ejs mas foi descontinuado

  app.set('view engine', 'ejs');
  app.set('views','../api-frontend/views');

  app.use(
    express.json(),
    express.urlencoded({extended: true}),
    cors(),
    tasks,
    users
    
  )
}



export default routes