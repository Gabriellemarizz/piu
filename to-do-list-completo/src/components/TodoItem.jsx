
import { FaTrash } from 'react-icons/fa'
import classNames from 'classnames'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span
        onClick={() => onToggle(todo.id)}
        className={classNames({ completed: todo.completed })}
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </span>
      <FaTrash
        onClick={() => onDelete(todo.id)}
        style={{ color: '#ef4444', cursor: 'pointer' }}
      />
    </div>
  )
}

export default TodoItem
