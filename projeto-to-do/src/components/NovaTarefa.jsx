import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function NovaTarefa({ tarefas, setTarefas }) {
  const [texto, setTexto] = useState('')
  const [prazo, setPrazo] = useState('')

  const adicionar = () => {
    if (texto.trim()) {
      setTarefas([
        ...tarefas,
        {
          id: uuidv4(),
          texto,
          status: 'pendente',
          criadaEm: new Date(),
          prazo: prazo ? new Date(prazo) : null
        },
      ])
      setTexto('')
      setPrazo('')
    }
  }

  return (
    <div className="entrada">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <input
        type="datetime-local"
        value={prazo}
        onChange={(e) => setPrazo(e.target.value)}
      />
      <button onClick={adicionar}>Adicionar</button>
    </div>
  )
}

export default NovaTarefa
