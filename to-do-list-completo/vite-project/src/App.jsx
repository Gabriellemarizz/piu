import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './components/TodoItem'


function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const addTodo = () => {
    if (!text.trim()) {
      setError('Por favor, digite uma tarefa')
      return
    }
    setError('')
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
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
    <div className="todo-container">
      <h1>Minha To-do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            setError('')
          }}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua tarefa"
          aria-label="Adicionar nova tarefa"
        />
        <button onClick={addTodo} className="add-button">
          Adicionar
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">Nenhuma tarefa adicionada</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App