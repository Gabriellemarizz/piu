import React, { useState } from 'react'
import NovaTarefa from './components/NovaTarefa'
import ListaTarefas from './components/ListaTarefas'
import FiltroTarefas from './components/FiltroTarefas'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [filtro, setFiltro] = useState('todas')

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'todas') return true
    return t.status === filtro
  })

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <FiltroTarefas filtro={filtro} setFiltro={setFiltro} />
      <ListaTarefas tarefas={tarefasFiltradas} setTarefas={setTarefas} todasTarefas={tarefas} />
    </div>
  )
}

export default App
