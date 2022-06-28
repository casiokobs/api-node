import users from "../model/User.js";

class UserController {

  static listUser = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users)
  })
  }

  static listUserById = (req, res) => {
    const id = req.params.id;
    //parece que tem um bug que quando pesquisa por id depois de excluir ele traz a resposta ok mas sem informacao nenhuma
    users.findById(id, (err, users) => {
      if(!err) {
        res.status(200).send(users);
      } else {
        res.status(404).send({message: `${err.message} - User not found.`})
      }
    })
  }

  static addUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {

      if(!err) {
        res.status(201).send(user.toJSON())
      } else {
        res.status(500).send({message: `${err.message} - Failed to add user.`})
      }
    })
  }

  static updateUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'User updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(204).send({message: 'User removed successfully'})
      } else {
        res.status(404).send({message: `${err.message} - User not found.`})
      }
    })
  }

}

export default UserController