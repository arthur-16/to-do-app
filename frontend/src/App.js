import { useState, useEffect } from "react"
import { getToDos, getToDo, updateToDoComplete, deleteToDo } from "./services/toDos.js"



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

  const deleteToDoBtn = async (id) => {
    const data = await deleteToDo(id)
    
    setToDos(toDos => toDos.filter(todo => todo._id !== data))
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

          <div className='delete-todo' onClick={() => deleteToDoBtn(todo._id)}>x</div>
          </div>
        ))}
      </div>
      <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
          <div className="content">
            <h3>Add Task</h3>
            <input 
              type="text"
              className="add-todo-input"
              onChange={e => setNewToDo(e.target.value)}
              value={newToDo} />
          </div>
        </div>
      ) : ''}
    </div>
  );
}

export default App;
