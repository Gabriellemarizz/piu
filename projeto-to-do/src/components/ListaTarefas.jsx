import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TarefaItem from './TarefaItem'

function ListaTarefas({ tarefas, setTarefas, todasTarefas }) {
  const reordenar = (result) => {
    if (!result.destination) return
    const itens = Array.from(todasTarefas)
    const [reordenado] = itens.splice(result.source.index, 1)
    itens.splice(result.destination.index, 0, reordenado)
    setTarefas(itens)
  }

  return (
    <DragDropContext onDragEnd={reordenar}>
      <Droppable droppableId="lista">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
              <Draggable key={tarefa.id} draggableId={tarefa.id} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <TarefaItem tarefa={tarefa} tarefas={todasTarefas} setTarefas={setTarefas} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ListaTarefas
