import { useState, useEffect } from "react"
import { getToDos, getToDo, updateToDoComplete } from "./services/toDos.js"



function App() {
  const [toDos, setToDos] = useState([])
  const [popupActive, setPopupActive] = useState(false)
  const [newToDo, setNewToDo] = useState("")

  useEffect(() => {
    getAndSetToDos()
  }, [])

  const getAndSetToDos = async () => {
    try {
      await getToDos()
        .then(data => setToDos(data))
        .catch(err => console.error(`Error: ${err}`))
    }
    catch (error){
      throw error
    }
  }

  const completeToDo = async (id) => { 
    const data = await updateToDoComplete(id)
    
    setToDos(toDos =>
      toDos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete
      }
       return todo
    }))
  }

  return (
    <div className="App">
      <h1>Welcome Art!</h1>
      <h4>Your tasks</h4>

      <div className='todos'>
        {toDos.map(todo => (
          <div className=
            {"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id} onClick={() => completeToDo(todo._id)}>
          <div className="checkbox"></div>

          <div className='text'>{ todo.text }</div>

          <div className='delete-todo'>x</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
