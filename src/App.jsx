import { useState } from 'react'

// Custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])

  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }



  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList 
          deleteTask={deleteTask}
          tasks={tasks}
        />
      )}
    </div>
  )
}



export default App
