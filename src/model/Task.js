import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    id: {type: String},
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    date: {type: Date, required: true},
  }
);

const tasks= mongoose.model('task', taskSchema);

export default tasks;