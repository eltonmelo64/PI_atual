import React, { useState } from "react";
import "./Tabs.css";

function Tabs() {
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
          <div className="ranking" id="bardogera">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1a/ed/39/d1/roda-de-samba-e-pagode.jpg"
              alt="Roda de Samba no Bar do Gera"
            />
            <div>
              <h2>Samba no Bar do Gera: A Festa que Você Não Pode Perder!</h2>
              <p>
                Prepare-se para uma noite inesquecível de samba, alegria e
                descontração!
                <br />
                Venha celebrar com a gente na nossa tradicional roda de samba!
              </p>
              <p>
                Traga seus amigos e venha viver a verdadeira essência do samba!
                <br />
                Vamos fazer história juntos! Confirme sua presença e venha
                sambar com a gente!
              </p>
              <span>Cidade: Recife</span>
              <br />
              <span>Eu vou: {countBDG}</span>

              <button className="btn-euvou" onClick={incrementCountBDG}>
                Eu vou!
              </button>
              {/* <button className="btn-cancelar" onClick={deleteCountBDG}>
                Cancelar rolê
              </button> */}
            </div>
          </div>

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

          <div className="ranking" id="armazem14">
            <img
              src="https://jpimg.com.br/uploads/2021/06/design-sem-nome-2021-06-24t151518.551.jpg"
              alt="Show do Angra no Armazém 14"
            />
            <div>
              <h2>Show Imperdível de Metal no Armazém 14 com a Banda Angra!</h2>
              <p>Prepare-se para uma noite épica de heavy metal!</p>
              <p>
                Não perca a chance de ver Angra de perto!
                <br />
                Traga sua galera e prepare-se para bater cabeça a noite toda!
                <br />
                Garanta seu ingresso agora e venha fazer parte desse momento
                histórico!
              </p>
              <span>Cidade: Recife</span>
              <br />
              <span>Eu vou: {countAMZ14}</span>
              <button className="btn-euvou" onClick={incrementCountAMZ14}>
                Eu vou!
              </button>
              {/* <button className="btn-cancelar">Cancelar rolê</button> */}
            </div>
          </div>

          <div className="ranking" id="northway">
            <img
              src="https://cdn.regiaonews.com.br/uploads/noticias/2021/06/162chb4gfl2d1c8.jpg"
              alt="Circo TransAmérica no Shopping North Way"
            />
            <div>
              <h2>O Circo TransAmérica Chegou ao Shopping North Way!</h2>
              <p>Prepare-se para uma experiência mágica e emocionante!</p>
              <p>
                Traga a família e venha viver momentos inesquecíveis!
                <br />
                Venha se surpreender com a magia do circo!
                <br />
                Garanta seus ingressos e não fique de fora dessa aventura!
              </p>
              <span>Cidade: Paulista</span>
              <br />
              <span>Eu vou: {countSNW}</span>
              <button className="btn-euvou" onClick={incrementCountSNW}>
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
              <span>Eu fui: 665</span>

              
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
                src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2024/06/design-sem-nome-2.jpg"
                alt="Samba Recife"
              />
              <div>
                <h2>Samba Recife: Um Espetáculo de Sucesso do Samba</h2>
                <p>No último fim de semana, o Centro de Convenções do Recife se transformou em um verdadeiro palco de celebração com o evento Samba Recife! Foi uma noite repleta de ritmo, alegria e muita animação, unindo apaixonados pelo samba em uma festa inesquecível.</p>
                <p>Obrigado a todos que compareceram! Vocês fizeram desse evento uma experiência incrível, com apresentações de artistas talentosos que contagiaram a todos com sua energia! Reviva os melhores momentos! Fique ligado! Em breve, teremos mais eventos para continuar a celebração da nossa rica cultura. Junte-se a nós e mantenha o samba vivo!</p>
                <span>Eu fui: 568</span>
              </div>
            </div>

            <div className="ranking">
              <img
                src="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2023/05/05/928331/20230505173805418777e.jpeg"
                alt="Seresta no Marco Zero, no Recife"
              />
              <div>
                <h2>Sucesso Total na Seresta do Marco Zero!</h2>
                <p>No coração do Recife, a magia da música tomou conta do Marco Zero! A seresta foi um verdadeiro espetáculo, reunindo centenas de amantes da boa música e da cultura pernambucana.</p>
                <p>Agradecemos a todos que participaram! Com canções que embalaram corações e sorrisos que iluminaram a noite, o evento foi um sucesso absoluto! Não perca a próxima! Fique ligado para mais eventos incríveis. Juntos, fazemos a cultura brilhar ainda mais!</p>
                <span>Eu fui: 368</span>
              </div>
            </div>

            <div className="ranking">
              <img
                src="https://www.faxaju.com.br/wp-content/uploads/2017/11/1-9.jpg"
                alt="Natal Gelado no Shopping North Way"
              />
              <div>
                <h2>Natal Gelado: Um Sucesso Encantador no Shopping North Way!</h2>
                <p>Neste fim de semana, o Shopping North Way se transformou em um verdadeiro paraíso de Natal com o evento Natal Gelado! Famílias e amigos se reuniram para aproveitar a magia das festividades, repletas de atrações incríveis e momentos inesquecíveis.</p>
                <p>Agradecemos a todos que participaram! Vocês tornaram nosso Natal ainda mais especial com sorrisos, alegria e muita diversão! Fique atento! Em breve teremos mais surpresas e eventos para continuar a celebração. Venha viver a magia do Natal conosco!</p>
                <span>Eu fui: 98</span>
              </div>
            </div>



        </div>

        {/* <div
          className={`content ${activeTab === "rolesm" ? "show" : ""}`}
          id="rolesm"
        ></div> */}
        {/* ROLES MARCADOS */}
      </div>
    </div>
  );
}

export default Tabs;
