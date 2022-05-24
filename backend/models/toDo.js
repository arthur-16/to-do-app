import mongoose from "mongoose"
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
  text: { type: String },
  complete: { type: String },
  timestamp: { type: String },
})

export default mongoose.model("ToDo", ToDoSchema)