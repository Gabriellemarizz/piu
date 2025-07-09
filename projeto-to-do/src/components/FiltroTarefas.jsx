import React from 'react'

function FiltroTarefas({ filtro, setFiltro }) {
  return (
    <div className="filtros">
      <button onClick={() => setFiltro('todas')} className={filtro === 'todas' ? 'ativo' : ''}>Todas</button>
      <button onClick={() => setFiltro('pendente')} className={filtro === 'pendente' ? 'ativo' : ''}>Pendentes</button>
      <button onClick={() => setFiltro('realizada')} className={filtro === 'realizada' ? 'ativo' : ''}>Realizadas</button>
      <button onClick={() => setFiltro('nao-realizada')} className={filtro === 'nao-realizada' ? 'ativo' : ''}>Não Realizadas</button>
    </div>
  )
}

export default FiltroTarefas
