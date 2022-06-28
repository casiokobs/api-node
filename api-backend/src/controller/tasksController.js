import tasks from "../model/Task.js";

class TasksController {

  static listTask = (req, res) => {
    tasks.find((err, tasks) => {
      res.status(200).json(tasks)
  })
  }

  static listTaskById = (req, res) => {
    const id = req.params.id;
    tasks.findById(id, (err, tasks) => {
      if(err) {
        res.status(404).send({message: `${err.message} - Task not found.`})
      } else {
        res.status(200).send(tasks);
      }
    })
  }

  static addTask = (req, res) => {
    let task = new tasks(req.body);
    task.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Failed to add task.`})
      } else {
        res.status(201).send(task.toJSON())
      }
    })
  }

  static updateTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Task updated successfully'})
      } else {
        res.status(404).send({message: `${err.message} - Task not found`})
      }
    })
  }

  static deleteTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(204).send({message: 'Task removed successfully'})
      } else {
        res.status(404).send({message: 'Task not found'})
      }
    })
  }
}

export default TasksController