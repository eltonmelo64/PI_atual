import React, { useState } from "react";
import "./Chat.css";
import fotoC from '../../images/Carlos.jpg';
import fotoW from '../../images/Wesley.jpg';
import fotoG from '../../images/Gabriel.jpeg';
import fotoX from '../../images/Xande.jpeg';
import fotoGATO from '../../images/gato.jpg';
import fotoSft from '../../images/PerfilSft.jpg'; /* para perfis sem foto */

function Chat() {
  const [messages, setMessages] = useState([
    {
      user: "Wesley Paredes",
      text: "Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou demais!",
      img: fotoW
    },
    {
      user: "Carlos Jansen",
      text: "Fala não! Sei nem como cheguei em casa... Só acordei na minha cama kkkkkkkkk. Top!!",
      img: fotoC
    },
    {
      user: "Gabriel Francisco",
      text: "Vcs viram que o Fogo de Terra tá com promoção de nas sextas feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!",
      img: fotoG
    },
    {
      user: "Alexandre Alves",
      text: "Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento do Natal Gelado, lá no Tacaruna. Elas endoidaram kkkk. Tá massa lá",
      img: fotoX
    },
    {
      user: "Yuri",
      text: "Poisé Wesley, só faltou eu ter caído de tanto que aproveitei kkkkk",
      img: fotoSft
    },
  ]);
  
  const [inputValue, setInputValue] = useState("");

  


  function quebrarTexto(texto) { 
    let resultado = '';
    const limite = 27;

    for (let i = 0; i < texto.length; i += limite) {
        resultado += texto.slice(i, i + limite) + '\n';
    }

    return resultado;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const textorig = inputValue;
      const textocorrig = quebrarTexto(textorig);
      const newMessage = {
        user: "Você",
        text: textocorrig, 
        img: fotoGATO
      };
      setMessages([...messages, newMessage]);
      setInputValue(""); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Impede a quebra de linha ao pressionar Enter
      handleSubmit(e); // Chama a função de envio
    }
  };

  return (
    <div className="boxChat">
      <div className="dizAi">
        <h2>Diz aí!</h2>
      </div>
      <div className="caixaMensagens">
        {messages.map((msg, index) => (
          <div className="mensagens" key={index}>
            <div className="perfil">
              <img src={msg.img} alt="" />
              <p>{msg.user}</p>
            </div>
            <p id="texto-maxw">{msg.text}</p>
          </div>
        ))}
      </div>
      <div>
        <form className="chatFormInputText" onSubmit={handleSubmit}>
          <textarea
            className="chatInputText"
            rows="4"
            cols="50"
            placeholder="Digite seu texto aqui..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown} // Captura a tecla "Enter"
          ></textarea>
          <button type="submit" className="sendButton" title="Enviar">⮚</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
