
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FaTrash } from 'react-icons/fa'
import classNames from 'classnames'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (!text.trim()) return
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setText('')
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container">
      <h1>Minha To-do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua tarefa"
      />
      <button onClick={addTodo}>Adicionar</button>

      <div style={{ marginTop: '1.5rem' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default App
