import React from "react";

// Lista de listas de carros
const listasDeCarros = [
  [
    { id:0,
      modelo: "ford",
      ano: 1998,
      cor: "vermelho" },
    { id: 1,
      modelo: 'renault',
      cor: 'preto',
      ano: 2020},
    { id: 2,
      modelo: 'audi',
      cor: 'azul',
      ano: 2016},
    { id: 3,
      modelo: 'chevrolet',
      cor: 'vermelho',
      ano: 2022},
    {id: 4,
    modelo: 'jeep',
    cor: 'vermelho',
    ano: 2023},
    {id: 5,
    modelo: 'ram',
    cor: 'verde',
    ano: 2015},
    {id: 6,
    modelo: 'fiat',
    cor: 'preto',
    ano: 2018},
    {id: 7,
    modelo: 'byd',
    cor: 'vermelho',
    ano: 2024}
  ]
];

//exibir várias listas de carros
//a primeira funciona mapeando e filtrando todos os carros para que filtre apenas os carros vermelhos
// e os carros com anos superiores a 2019, o filter é usado primeiro pra filtrar somente o ano do carro, garantindo que tneha ano maior que 2019
function Listas() {
  return (
    <div className="lis-container">
      <h2>Listas de Carros</h2>

      {listasDeCarros.map((lista, indexLista) => (
        <div key={indexLista} style={{ marginBottom: "20px" }}>
          <h3>Lista {indexLista + 1}</h3>

          <h4>Todos os Carros:</h4>
          <ul>
            {lista
                .filter ((carro) => carro.ano > 2019)
                .map((carro, indexCarro) => (
                <li key={indexCarro}>
                  {carro.modelo} - {carro.ano}
                </li>
            ))}
          </ul>

          <h4>Carros Vermelhos:</h4>
          <ul>
            {lista
              .filter((carro) => carro.cor === "vermelho")
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