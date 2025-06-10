import classNames from 'classnames'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span
        onClick={() => onToggle(todo.id)}
        className={todo.completed ? 'completed' : ''}
        role="checkbox"
        aria-checked={todo.completed}
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label={`Remover tarefa ${todo.text}`}
      >
        remover
      </button>
    </div>
  )
}

export default TodoItem
