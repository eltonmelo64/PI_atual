import React, { useEffect } from "react";
import "./Carousel.css";
import foto1 from '../../images/como-montar-um-pub.jpg';
import foto2 from '../../images/boate-noturna-scaled.jpg';
import foto3 from '../../images/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg';
import foto4 from '../../images/whatsapp-image-2022-08-17-at-194440.jpg';


function Carousel() {
  useEffect(() => {
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    let indiceAtual = 0;

    const rotacionarAutomaticamente = () => {
      indiceAtual = (indiceAtual + 1) % radios.length; // Incrementa o índice
      radios[indiceAtual].checked = true; // Seleciona o próximo rádio
    };

    const intervalo = setInterval(rotacionarAutomaticamente, 5000); // Troca a cada 3 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
                <img
                  src={foto1}
                  alt="bar"
                />
              </div>
              <div className="slide">
                <img
                  src={foto2}
                  alt="boate"
                />
              </div>
              <div className="slide">
                <img
                  src={foto3}
                  alt="restaurante"
                />
              </div>
              <div className="slide">
                <img
                  src={foto4}
                  alt="show"
                />
              </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </>
  );
}

export default Carousel;
