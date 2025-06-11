import React from "react";

// Lista de listas de carros
const listasDeCarros = [
  [
    { modelo: "Gol", ano: 2020, cor: "vermelha" },
    { modelo: "Onix", ano: 2021, cor: "preta" },
  ],
  [
    { modelo: "Civic", ano: 2019, cor: "vermelha" },
    { modelo: "Corolla", ano: 2022, cor: "branca" },
  ],
];

//exibir várias listas de carros
function Listas() {
  return (
    <div className="lis-container">
      <h2>Listas de Carros</h2>

      {listasDeCarros.map((lista, indexLista) => (
        <div key={indexLista} style={{ marginBottom: "20px" }}>
          <h3>Lista {indexLista + 1}</h3>

          <h4>Todos os Carros:</h4>
          <ul>
            {lista.map((carro, indexCarro) => (
              <li key={indexCarro}>
                {carro.modelo} - {carro.ano}
              </li>
            ))}
          </ul>

          <h4>Carros Vermelhos:</h4>
          <ul>
            {lista
              .filter((carro) => carro.cor === "vermelha")
              .map((carro, indexVermelho) => (
                <li key={indexVermelho}>
                  {carro.modelo} - {carro.ano}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Listas;

