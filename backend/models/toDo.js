import mongoose from "mongoose"
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
  text: { type: String, required: true },
  complete: { type: Boolean, default: false },
  timestamp: { type: String, default: Date.now() },
})

export default mongoose.model("ToDo", ToDoSchema)