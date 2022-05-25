import { useState, useEffect } from "react"
import {getToDos} from "./services/toDos.js"



function App() {
  const [toDos, setToDos] = useState([])
  const [popupActive, setPopupActive] = useState(false)
  const [newToDo, setNewToDo] = useState("")

  useEffect(() => {
    getAndSetToDos()
    console.log(toDos)
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


  return (
    <div className="App">
      <h1>Welcome Art!</h1>
      <h4>Your tasks</h4>

      <div className='todos'>
        {toDos.map(todo => (
          <div className=
            {"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id}>
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
