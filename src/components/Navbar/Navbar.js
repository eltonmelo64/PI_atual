import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import HomeImage from "../../images/Home.png";
import logoIMG from "../../images/Logo.png";
import ico from "../../images/icone.ico";

<link rel="icon" href="/src/images/icone.ico"></link>;

function ContactModal({ isOpenC, closeModalC }) {
  if (!isOpenC) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModalC}>❌</button>
        <h2>Contatos</h2>
        <p><strong>Email:</strong> contato@uhuuu.com</p>
        <p><strong>Telefone:</strong> +55 81 9xxxx-4321</p>
        <p><strong>Endereço:</strong> Cais do Apolo, 222 - Recife, PE, Cep 50030-230</p>
      </div>
    </div>
  );
}

function LoginModal({ isOpen, closeModal, onLogin }) {
  if (!isOpen) return null;

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin();
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>❌</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" placeholder="Usuário" required />
          </div>
          <div>
            <label htmlFor="password">Senha </label>
            <input type="password" id="password" placeholder="Senha" required />
          </div>
          <div>
            <button className="btnEntrarL" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Navbar({ onCityChange }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Novo estado para a pesquisa
  const [suggestions, setSuggestions] = useState([]); // Estado para armazenar sugestões de busca
  const navigate = useNavigate();

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Buscando por:", searchQuery);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedPage(value);
    navigate(value);
  };

  // Função que gera sugestões com base no valor digitado
  const generateSuggestions = (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const sampleSuggestions = [
      "Bar do gera",
      "Fogo da terra",
      "Northway",
      "Samba",
      "Rock",
      "pop",
      "Comédia stand-up",
      "Circo"
    ];

    const filteredSuggestions = sampleSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    generateSuggestions(query); // Atualiza as sugestões à medida que o usuário digita
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src={HomeImage}
              alt="logo"
              title="Inicio"
              className="home-img"
            />
          </Link>
        </div>

        <div className="foralogo">
          <div className="uhuuu">
            <img
              src={logoIMG}
              alt="logo"
              title="Logo"
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
                  placeholder="Buscar"
                  value={searchQuery}
                  onChange={handleSearchChange} // Chama a função para atualizar a pesquisa
                />
                <Link to="/PesquisaGeral">
                  <input
                    className="headerformbutton"
                    type="submit"
                    title="Pesquisar"
                    value={"🔎"}
                  />
                </Link>

                {/* Exibindo sugestões de busca */}
                {suggestions.length > 0 && (
                  <ul className="search-suggestions">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} className="suggestion-item">
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="headerlist">
                  <li>
                    <Link to="/configuracoes" title="Configurações">Config</Link>
                  </li>
                  <li>
                    <a href="#" title="Contato" onClick={openContactModal}>Contato</a>
                  </li>
                  <li>
                    {isAuthenticated ? (
                      <span className="welcome-message">Bem-Vindo 😁<button onClick={handleLogout}>Sair</button></span>
                    ) : (
                      <a href="#" title="Login" onClick={openLoginModal}>Login</a>
                    )}
                  </li>
                </ul>

                <div className="gps">
                  <select value={selectedPage} onChange={handleSelectChange}>
                    <option value="" disabled>
                      Cidades
                    </option>
                    <option value="/Recife">Recife - PE</option>
                    <option value="/Olinda">Olinda - PE</option>
                    <option value="/Paulista">Paulista - PE</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Contato */}
      <ContactModal isOpenC={isContactModalOpen} closeModalC={closeContactModal} />

      {/* Modal de Login */}
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} onLogin={handleLogin} />
    </>
  );
}

export default Navbar;
