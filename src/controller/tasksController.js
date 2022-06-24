import tasks from "../model/Task.js";

class TasksController {

  static listarTask = (req, res) => {
    tasks.find((err, tasks) => {
      res.status(200).json(tasks)
  })
  }

  static listarTaskPorId = (req, res) => {
    const id = req.params.id;
    tasks.findById(id, (err, tasks) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Task não localizado.`})
      } else {
        res.status(200).send(tasks);
      }
    })
  }

  static cadastrarTask = (req, res) => {
    let autor = new tasks(req.body);
    autor.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Task.`})
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Task atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Task removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default TasksController