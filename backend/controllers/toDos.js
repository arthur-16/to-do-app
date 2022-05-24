import ToDo from "../models/toDo.js";

export const getToDos = async (req, res) => {
  try {
    const todos = await ToDo.find()
    res.json(todos)
  }
  catch (error){
    console.log(error)
    res.status(500).json({ error: error.message });
  }
}

// export const getToDo = async (req, res) => {
//   try {
//     const { id } = req.params.id
//     const todo = await ToDo.findById()
//     res.json(todos)
//   }
//   catch (error) {
//     console.log(error)
//     res.status((500).json({ error: error.message }))
//   }
// }