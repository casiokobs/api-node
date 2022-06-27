import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  //valida pelo dia se a data é maior que hoje, exemplo se hoje é dia 27 a menor data valida é dia 28
  {
    id: {type: String},
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    date: {type: Date,
      validate: function(input) {
          return new Date(input) >= new Date();
      },
      message: input => `${input} must be greater than or equal to the current date!`},
  }
);

const tasks= mongoose.model('task', taskSchema);

export default tasks;