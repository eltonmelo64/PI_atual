import React, { useState, useRef, useEffect } from "react";
import "./Olinda.css";
import barGera from "../../../images/barGera.jpg";
import fogoTerra from "../../../images/fogoTerra.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

function Olinda() {
  const [messages, setMessages] = useState([
    {
      titulo: "Samba no Bar do Gera: A Festa que Você Não Pode Perder!",
      paragrafo1:
        "Prepare-se para uma noite inesquecível de samba, alegria e descontração! Venha celebrar com a gente na nossa tradicional roda de samba!",
      paragrafo2:
        "Traga seus amigos e venha viver a verdadeira essência do samba! Vamos fazer história juntos! Confirme sua presença e venha sambar com a gente!",
      span1: "Cidade: Recife",
      span2: "Eu vou: {countBDG}",
      img: barGera,
    },
    {
      titulo: "Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros!",
      paragrafo1:
        "Se você é fã de uma boa carne, não pode perder essa oportunidade!",
      paragrafo2:
        "Traga sua fome e prepare-se para uma experiência gastronômica única!Venha se deliciar e aproveitar momentos especiais no Fogo de Terra! Reserve sua mesa e venha saborear o melhor da carne!",
      span1: "Cidade: Olinda",
      span2: "Eu vou: {countFDT}",
      img: fogoTerra,
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Estados para controlar a contagem de "Eu vou" para cada evento
  const [countBDG, setCountBDG] = useState(85); // Bar do Gera
  const [countFDT, setCountFDT] = useState(76); // Fogo de Terra
  const [countBTK, setCountBTK] = useState(71); // Boate Hotkiss
  const [countAMZ14, setCountAMZ14] = useState(68); // Armazém 14
  const [countSNW, setCountSNW] = useState(61); // Shopping North Way

  // Funções para incrementar a contagem de "Eu vou"
  const incrementCountBDG = () => setCountBDG(countBDG + 1);
  const incrementCountFDT = () => setCountFDT(countFDT + 1);
  const incrementCountBTK = () => setCountBTK(countBTK + 1);
  const incrementCountAMZ14 = () => setCountAMZ14(countAMZ14 + 1);
  const incrementCountSNW = () => setCountSNW(countSNW + 1);

  // //Funções para tirar a contagem de "Eu vou"
  // const deleteCountBDG = () => setCountBDG(countBDG - 1);
  // const deleteCountFDT = () => setCountFDT(countFDT - 1);
  // const deleteCountBTK = () => setCountBTK(countBTK - 1);
  // const deleteCountAMZ14 = () => setCountAMZ14(countAMZ14 - 1);
  // const deleteCountSNW = () => setCountSNW(countSNW - 1);

  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState("future");

  // Função para mudar a aba
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="App">
      <div className="headerBox">
        <Navbar />
      </div>
      <div id="container">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "future" ? "active" : ""}`}
            onClick={() => handleTabClick("future")}
          >
            O que vai bombar?
          </button>
          <button
            className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
            onClick={() => handleTabClick("past")}
          >
            O que já bombou?
          </button>
          {/* <button
          id="add-buttons"
          className={`tab-btn ${activeTab === "rolesm" ? "active" : ""}`}
          onClick={() => handleTabClick("rolesm")}
        >
          Rolês Marcados:
        </button> */}
        </div>

        <div className="tab-contents">
          <div
            className={`content ${activeTab === "future" ? "show" : ""}`}
            id="future"
          >
            <div className="ranking" id="fogodaterra">
              <img
                src="https://panfleteria.sfo2.digitaloceanspaces.com/uploads/ofertas/img/01-Desconto-em-Rodizio-Gheller-Prime-Churrascaria-em-Fortaleza_8_1_12.jpg"
                alt="Rodízio Restaurante Fogo de Terra"
              />
              <div>
                <h2>
                  Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros!
                </h2>
                <p>
                  Se você é fã de uma boa carne, não pode perder essa
                  oportunidade!
                </p>
                <p>
                  Traga sua fome e prepare-se para uma experiência gastronômica
                  única!
                  <br />
                  Venha se deliciar e aproveitar momentos especiais no Fogo de
                  Terra!
                  <br />
                  Reserve sua mesa e venha saborear o melhor da carne!
                </p>
                <span>Cidade: Olinda</span>
                <br />
                <span>Eu vou: {countFDT}</span>

                <button className="btn-euvou" onClick={incrementCountFDT}>
                  Eu vou!
                </button>
                {/* <button className="btn-cancelar">Cancelar rolê</button> */}
              </div>
            </div>

            <div className="ranking" id="boatekiss">
              <img
                src="https://niteroiaqui.com.br/wp-content/uploads/2024/05/boate-em-niteroi1.jpg"
                alt="DJ Boladão na Boate HotKiss"
              />
              <div>
                <h2>Noite Incrível na Boate Hotkiss com DJ Boladão!</h2>
                <p>Prepare-se para uma festa inesquecível!</p>
                <p>
                  Não fique de fora dessa! Venha fazer parte da festa que todo
                  mundo vai comentar!
                  <br />
                  Traga seus amigos e venha se divertir!
                  <br />
                  Garanta seu ingresso e venha curtir a noite com a gente!
                </p>
                <span>Cidade: Olinda</span>
                <br />
                <span>Eu vou: {countBTK}</span>
                <button className="btn-euvou" onClick={incrementCountBTK}>
                  Eu vou!
                </button>
                {/* <button className="btn-cancelar">Cancelar rolê</button> */}
              </div>
            </div>
          </div>

          <div
            className={`content ${activeTab === "past" ? "show" : ""}`}
            id="past"
          >
            {/* IMAGENS DO PASSADO */}
            <div className="ranking">
              <img
                src="https://assets.bileto.sympla.com.br/eventmanager/production/3bcum94muoauvb2j4t610v4r915j645907v15rlcn5bifa66ue19147498mul3mgf0ojfcqk53khqm2i3hkbomg7asfru8njdtvrgbd.webp"
                alt="Ney Matogrosso em Recife"
              />
              <div>
                <h2>O sucesso do show de Ney Matogrosso pede volta!</h2>
                <p>
                  Depois do sucesso absoluto da crítica e do público, que lotou
                  todas as primeiras apresentações no Rio de Janeiro, Bloco na
                  Rua, o último show de Ney Matogrosso, ganhou a estrada e Ney
                  encantou seu público em vários cantos do Brasil.
                </p>
                <p>
                  Foram pouco mais de 5 anos ininterruptos à frente da turnê
                  Atento aos Sinais, projeto que passou pelos mais diferentes
                  palcos e arrebatou plateias no Brasil e no exterior. Uma
                  temporada longa até para os padrões de Ney Matogrosso.
                </p>
                <span>Eu vou: 365</span>

                {/* <button className="btn-euvou" onClick={incrementCountNEY}>
                Eu vou!
              </button> */}
                {/* <button className="btn-cancelar" onClick={deleteCountBDG}>
                Cancelar rolê
              </button> */}
              </div>
            </div>

            <div className="ranking">
              <img
                src="https://panfleteria.sfo2.digitaloceanspaces.com/uploads/ofertas/img/01-Desconto-em-Rodizio-Gheller-Prime-Churrascaria-em-Fortaleza_8_1_12.jpg"
                alt="Rodízio Restaurante Fogo de Terra"
              />
              <div>
                <h2>
                  Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros!
                </h2>
                <p>
                  Se você é fã de uma boa carne, não pode perder essa
                  oportunidade! Venha experimentar o nosso incrível rodízio,
                  repleto de cortes suculentos e sabores irresistíveis!
                </p>
                <p>
                  Traga sua fome e prepare-se para uma experiência gastronômica
                  única! Venha se deliciar e aproveitar momentos especiais no
                  Fogo de Terra! Reserve sua mesa e venha saborear o melhor da
                  carne!
                </p>
                <span>Eu vou: 266</span>

                {/* <button className="btn-euvou" onClick={incrementCountBDG}>
                Eu vou!
              </button> */}
                {/* <button className="btn-cancelar" onClick={deleteCountBDG}>
                Cancelar rolê
              </button> */}
              </div>
            </div>

            <div className="ranking">
              <img
                src="https://panfleteria.sfo2.digitaloceanspaces.com/uploads/ofertas/img/01-Desconto-em-Rodizio-Gheller-Prime-Churrascaria-em-Fortaleza_8_1_12.jpg"
                alt="Rodízio Restaurante Fogo de Terra"
              />
              <div>
                <h2>
                  Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros!
                </h2>
                <p>
                  Se você é fã de uma boa carne, não pode perder essa
                  oportunidade! Venha experimentar o nosso incrível rodízio,
                  repleto de cortes suculentos e sabores irresistíveis!
                </p>
                <p>
                  Traga sua fome e prepare-se para uma experiência gastronômica
                  única! Venha se deliciar e aproveitar momentos especiais no
                  Fogo de Terra! Reserve sua mesa e venha saborear o melhor da
                  carne!
                </p>
                <span>Eu vou: 240</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Olinda;
