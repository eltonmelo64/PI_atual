import React, { useState } from "react";
import "./Chat.css";
import fotoC1 from '../../images/1WhatsApp Image 2024-10-15 at 14.26.45.jpg';
import fotoC2 from '../../images/2WhatsApp Image 2024-10-15 at 14.26.45.jpg'; // Adicione quantas imagens precisar

function Chat() {
  const [messages, setMessages] = useState([
    {
      user: "Wesley Paredes",
      text: "Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou demais!",
      img: fotoC1
    },
    {
      user: "Carlos Jansen",
      text: "Fala não! Sei nem como cheguei em casa... Só acordei na minha cama kkkkkkkkk. Top!!",
      img: fotoC2
    },
    {
      user: "Gabriel Francisco",
      text: "Vcs viram que o Fogo de Terra tá com promoção nas sextas feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!",
      img: fotoC1
    },
    // Adicione outras mensagens com imagens locais...
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (inputValue.trim()) {
      const newMessage = {
        user: "Você",
        text: inputValue,
        img: "https://i.pinimg.com/280x280_RS/39/82/58/3982584222ebfad41d818e9de2b80197.jpg" // URL da imagem do seu perfil
      };
      setMessages([...messages, newMessage]);
      setInputValue(""); // Limpa o input após enviar
    }
  };

  return (
    <>
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
              <p>{msg.text}</p>
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
              onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado do input
            ></textarea>
            <button type="submit" className="sendButton">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
