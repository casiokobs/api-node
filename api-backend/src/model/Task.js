import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  //valida se a hora é maior que a hora atual
  //mongoose salva hora sem considerar o fuso horario
  {
    id: {type: String},
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId,
           ref: 'user',
           required: true,
           message: `User not found or invalid!!`
          },
    date: {type: Date,
      validate: function(input) {
          return new Date(input) >= new Date();
      },
      message: input => `${input} must be greater than the current date!`},
  }
);

const tasks= mongoose.model('task', taskSchema);

export default tasks;