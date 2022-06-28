import mongoose from "mongoose"

mongoose.connect("mongodb+srv://fabiano:1705@cluster0.tb917.mongodb.net/api-users-tasks");

let db = mongoose.connection;

export default db;