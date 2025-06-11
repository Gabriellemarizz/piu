import React, { useState } from "react";


function Click() {
  const [contador, setContador] = useState(0);   
  const [totalCliques, setTotalCliques] = useState(0);  


  const mais = () => {
    setContador((valorAtual) => valorAtual + 1);
    setTotalCliques((cliques) => cliques + 1);
  };


  const menos = () => {
    setContador((valorAtual) => valorAtual - 1);
    setTotalCliques((cliques) => cliques + 1);
  };

  return (
    <div className="click-container">
      <h2>Contador de Cliques</h2>
      <p className="valor-contador">Valor atual: {contador}</p>
      <p className="valor-cliques">Total de cliques: {totalCliques}</p>

      <button
        onClick={mais}
        className={`botao ${contador >= 10 ? "botao-verde" : ""}`}
      >
        mais
      </button>

      <button
        onClick={menos}
        className={`botao ${contador <= -1 ? "botao-vermelho" : ""}`}
      >
        menos
      </button>
    </div>
  );
}

export default Click;
