import React from 'react'

function TarefaItem({ tarefa, tarefas, setTarefas }) {
  const atualizarStatus = (novoStatus) => {
    const atualizadas = tarefas.map((t) =>
      t.id === tarefa.id ? { ...t, status: novoStatus } : t
    )
    setTarefas(atualizadas)
  }

  const remover = () => {
    const restantes = tarefas.filter((t) => t.id !== tarefa.id)
    setTarefas(restantes)
  }

  const agora = new Date()
  const vencida = tarefa.prazo && new Date(tarefa.prazo) < agora && tarefa.status !== 'realizada'

  return (
    <div className={`tarefa ${tarefa.status} ${vencida ? 'atrasada' : ''}`}>
      <div>
        <span>{tarefa.texto}</span>
        <small> Criada em: {new Date(tarefa.criadaEm).toLocaleString()}</small><br />
        {tarefa.prazo && <small>Prazo: {new Date(tarefa.prazo).toLocaleString()}</small>}
      </div>
      <div className="acoes">
        <button onClick={() => atualizarStatus('realizada')}>✅</button>
        <button onClick={() => atualizarStatus('pendente')}>🔁</button>
        <button onClick={() => atualizarStatus('nao-realizada')}>❌</button>
        <button onClick={remover}>🗑️</button>
      </div>
    </div>
  )
}

export default TarefaItem
