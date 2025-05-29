import { useState } from "react";
import './Desafio.css';
import arlon from "../assets/gato.jpeg";
import teo from "../assets/boi.jpeg";
import brian from "../assets/cobra.jpeg";
import dudu from "../assets/tigre.jpeg";
import hugo from "../assets/guaxinim.jpeg";
import { useEffect } from "react";

function Desafio() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [selecionado, setSelecionado] = useState(null);

  function handleClick() {
  const isDark = document.body.classList.contains('dark-theme');
  document.body.classList.toggle('dark-theme', !isDark);
  document.body.classList.toggle('light-theme', isDark);
}

useEffect(() => {
  document.body.classList.add('light-theme');
}, []);


  const personagens = [
    { nome: "Gato", img: arlon, descricao: "O gato ou gato doméstico é um mamífero carnívoro..." },
    { nome: "Boi", img: teo, descricao: "Se alimentam de capim, feno..." },
    { nome: "Cobra", img: brian, descricao: "Répteis alongados e geralmente venenosos..." },
    { nome: "Guaxinim", img: hugo, descricao: "Mamífero curioso de hábitos noturnos..." },
    { nome: "Tigre", img: dudu, descricao: "Grande felino listrado, caçador ágil..." },
  ];

  return (
    <div className="conteudo container">
      <button className="btn btn-primary" onClick={handleClick}>
        Altere o tema
      </button>


      <h2 className="mt-4">Escolha seu personagem do elenco das estrelas</h2>

      <div className="personagens row justify-content-center">
        {personagens.map((p, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <img
              src={p.img}
              alt={p.nome}
              className="img-fluid"
              onClick={() => setSelecionado(p)}
            />
            <p className="fw-bold mt-2">{p.nome}</p>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className="selecionado card mx-auto mt-4 p-3" style={{ maxWidth: "500px" }}>
          <h3>{selecionado.nome}</h3>
          <img
            src={selecionado.img}
            alt={selecionado.nome}
            className="img-fluid rounded"
          />
          <p className="mt-2">{selecionado.descricao}</p>
        </div>
      )}
    </div>
  );
}

export default Desafio;
