import React from "react";
import "./Tabs.css";
import "./script.js";

function Tabs() {
  return (
    <>
      <div id="container">
        <div className="tab-buttons">
          <button className="tab-btn" content-id="future">
            O que vai bombar?
          </button>
          <button className="tab-btn" content-id="past">
            O que já bombou?
          </button>
        </div>

        <div className="tab-contents">
          <div className="content show" id="future">
            <div className="ranking">
              <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1a/ed/39/d1/roda-de-samba-e-pagode.jpg"
                  alt="Roda de Samba no Bar do Gera"
                />
              <div>
                <h2>Samba no Bar do Gera: A Festa que Você Não Pode Perder!</h2>
                <p>Prepare-se para uma noite inesquecível de samba, alegria e descontração! Venha celebrar com a gente na nossa tradicional roda de samba!</p>
                <p>Traga seus amigos e venha viver a verdadeira essência do samba! Vamos fazer história juntos!Confirme sua presença e venha sambar com a gente!</p>
                <span>Eu vou: 85</span>
              </div>
            </div>

            <div className="ranking">
              <img
                  src="https://panfleteria.sfo2.digitaloceanspaces.com/uploads/ofertas/img/01-Desconto-em-Rodizio-Gheller-Prime-Churrascaria-em-Fortaleza_8_1_12.jpg"
                  alt="Rodízio Restaurante Fogo de Terra"
                />
              <div>
                <h2>Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros! </h2>
                <p>Se você é fã de uma boa carne, não pode perder essa oportunidade! Venha experimentar o nosso incrível rodízio, repleto de cortes suculentos e sabores irresistíveis!</p>
                <p>Traga sua fome e prepare-se para uma experiência gastronômica única! Venha se deliciar e aproveitar momentos especiais no Fogo de Terra! Reserve sua mesa e venha saborear o melhor da carne!</p>
                <span>Eu vou: 76</span>
              </div>
            </div>

            <div className="ranking">
              <img
                  src="https://niteroiaqui.com.br/wp-content/uploads/2024/05/boate-em-niteroi1.jpg"
                  alt="DJ Boladão na Boate HotKiss"
                />
              <div>
                <h2>Noite Incrível na Boate Hotkiss com DJ Boladão! </h2>
                <p>Prepare-se para uma festa inesquecível! Junte-se a nós para uma noite eletrizante com o DJ Boladão, que vai agitar a pista com os melhores hits e muita energia!</p>
                <p>Não fique de fora dessa! Venha fazer parte da festa que todo mundo vai comentar! Traga seus amigos e venha se divertir! Garanta seu ingresso e venha curtir a noite com a gente!</p>
                <span>Eu vou: 71</span>
              </div>
            </div>

            <div className="ranking">
              <img
                  src="https://jpimg.com.br/uploads/2021/06/design-sem-nome-2021-06-24t151518.551.jpg"
                  alt="Show do Angra no Armazém 14"
                />
              <div>
                <h2>Show Imperdível de Metal no Armazém 14 com a Banda Angra!</h2>
                <p>Prepare-se para uma noite épica de heavy metal! Venha assistir à lendária banda Angra ao vivo, trazendo todo o seu poder e virtuosidade para o palco!</p>
                <p>Não perca a chance de ver Angra de perto! Traga sua galera e prepare-se para bater cabeça a noite toda! Garanta seu ingresso agora e venha fazer parte desse momento histórico!</p>
                <span>Eu vou: 68</span>
              </div>
            </div>

            <div className="ranking">
              <img
                  src="https://cdn.regiaonews.com.br/uploads/noticias/2021/06/162chb4gfl2d1c8.jpg"
                  alt="Circo TransAmérica no Shopping North Way"
                />
              <div>
                <h2>O Circo TransAmérica Chegou ao Shopping North Way!</h2>
                <p>Prepare-se para uma experiência mágica e emocionante! O Circo TransAmérica traz um espetáculo incrível que vai encantar toda a família!</p>
                <p>Traga a família e venha viver momentos inesquecíveis! Venha se surpreender com a magia do circo! Garanta seus ingressos e não fique de fora dessa aventura!</p>
                <span>Eu vou: 61</span>
              </div>
            </div>
          </div>

          <div className="content" id="past">
            IMAGENS DO PASSADO
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
