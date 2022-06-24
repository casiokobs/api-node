import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:123@cluster0.lytwhcc.mongodb.net/Api-users-tasks");

let db = mongoose.connection;

export default db;