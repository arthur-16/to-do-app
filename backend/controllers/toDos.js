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

export const getToDo = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await ToDo.findById(id)

    if (todo) {
      return res.json(todo)
    }
    // res.status((400).res.json({error: "ToDo item not found!"}))
  }
  catch (error) {
    console.log(error)
    // res.status((500).json({ error: error.message }))
  }
}

export const createToDo = async (req, res) => {
  try {
    const todo = new ToDo({
      text: req.body.text
    })
    await todo.save()
    res.status((201).res.json(todo))
  }
  catch (error){
    console.log(error)
    res.status(500).json({ error: error.message });
  }
}

export const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await ToDo.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("ToDo deleted!")
    }

    throw new Error("ToDo not found")
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const updateToDo = async (req, res) => {
    const { id } = req.params
    const todo = await ToDo.findById(id)

    todo.complete = !todo.complete
  
    todo.save();

    res.status(200).json(todo);
}