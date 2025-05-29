import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Desafio from './componentes/Desafio'

function App() {
  return (
    <div>
      <h1>Desafio</h1>

      {/* mostra o componente Desafio */}
      <Desafio />
    </div>
  );
}

export default App;
