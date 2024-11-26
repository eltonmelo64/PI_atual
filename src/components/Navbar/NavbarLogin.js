import React, { useState } from "react";
import "./Navbar.css";
import HomeImage from "../../images/Home.png";
import logoIMG from "../../images/Logo.png";
import ico from "../../images/icone.ico";
<link rel="icon" href="/src/images/icone.ico"></link>;

function LoginModal({ isOpen, closeModal, onLogin }) {
  if (!isOpen) return null; // Não renderiza o modal se isOpen for falso

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação (verificação de usuário e senha)
    onLogin(); // Ao fazer login, chamamos o onLogin que vai mudar o estado de autenticado
    closeModal(); // Fecha o modal após o login
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" placeholder="Usuário" required />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha" required />
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Navbar({ onCityChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Novo estado para controlar a autenticação

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Altera o estado para 'autenticado'
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Altera o estado para 'desautenticado'
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    const query = event.target.elements.search.value; // Obtém o valor do input
    console.log("Buscando por:", query);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="Inicio">
            <img
              src={HomeImage}
              alt="logo"
              title="Inicio"
              className="home-img"
            />
          </a>
        </div>

        <div className="foralogo">
          <div className="uhuuu">
            <img
              src={logoIMG}
              alt="logo"
              title=""
              className="logo-img"
            />
          </div>

          <div className="listform">
            <div className="boxform">
              <form action="#" className="headerform" onSubmit={handleSearch}>
                <input
                  name="search"
                  className="inputtext"
                  type="text"
                  placeholder="   Buscar"
                />
                <input
                  className="headerformbutton"
                  type="submit"
                  title="Pesquisar"
                  value={"🔎"}
                />

                <ul className="headerlist">
                  <li>
                    <a href="#" title="Configurações">
                      Config
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" title="Contato">
                      Contato
                    </a>{" "}
                  </li>
                  <li>
                    {isAuthenticated ? (
                      <span className="welcome-message">Bem-Vindo 😁<button onClick={handleLogout}>Sair</button></span> // Exibe mensagem de boas-vindas e botão de logout
                    ) : (
                      <a href="#" title="Login" onClick={openModal}>
                        Login
                      </a>
                    )}
                  </li>
                </ul>

                <div className="gps">
                  <select onChange={onCityChange}>
                    <option value="Recife - PE">Recife - PE</option>
                    <option value="Olinda - PE">Olinda - PE</option>
                    <option value="Paulista - PE">Paulista - PE</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Login */}
      <LoginModal isOpen={isModalOpen} closeModal={closeModal} onLogin={handleLogin} />
    </>
  );
}

export default Navbar;
