import React, { useState } from "react";

// Componente responsável por organizar e exibir lista de itens adicionados pelo usuário
function Listas() {
  const [novoItem, setNovoItem] = useState("");      // controla o valor do input
  const [lista, setLista] = useState([]);            // armazena os itens adicionados

  // Adiciona o novo item à lista
  const adicionarItem = () => {
    if (novoItem.trim() !== "") {                    // impede adicionar itens vazios
      setLista([...lista, novoItem]);
      setNovoItem("");                               // limpa o input
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas:</h1><br></br>

      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        placeholder="Digite sua tarefa"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={adicionarItem} style={{ padding: "8px" }}>
        Adicionar
      </button>
      <br></br>
      <br></br>
      <h2>Itens:</h2>
      <ul>
        {lista.map((item, index) => (
          <ul key={index}>{item}</ul>
        ))}
      </ul>
    </div>
  );
}

export default Listas;
