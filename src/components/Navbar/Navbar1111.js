import React, { useState } from "react";
import "./Navbar.css";
import HomeImage from "../../images/Home.png"; // Importação correta
import logoIMG from "../../images/Logo.png";
import Gps from "../../images/gpsImage.png";
import ico from "../../images/icone.ico";
import config from "../../images/Confirgurações-png.png";

<link rel="icon" href="/src/images/icone.ico"></link>;

function Navbar({ onCityChange }) {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar a pesquisa

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Atualiza o estado com o valor do input
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    console.log("Buscando por:", searchQuery);
    // Aqui você pode implementar a lógica de busca que deseja
    if (searchQuery) {
      alert(`Buscando por: ${searchQuery}`); // Exibe uma alerta ou faz outra ação
    } else {
      alert("Por favor, insira um termo para buscar.");
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="Inicio">
            <img
              src={HomeImage} // Usando a imagem importada
              alt="logo"
              title="Inicio"
              className="home-img"
            />
          </a>
        </div>

        <div className="foralogo">
          <div className="uhuuu">
            <img
              src={logoIMG} // Usando a imagem importada
              alt="logo"
              title=""
              className="logo-img"
            />
          </div>

          <div className="listform">
            <div className="boxform">
              <form action="#" className="headerform" onSubmit={handleSearch}>
                <input
                  name="search" // Adicionando nome para o input
                  className="inputtext"
                  type="text"
                  placeholder="   Buscar"
                  value={searchQuery} // O valor do input é controlado pelo estado
                  onChange={handleSearchChange} // Atualiza o valor do estado
                />
                <input
                  className="headerformbutton"
                  type="submit"
                  title="Pesquisar"
                  value={"🔎"}
                />
              </form>
            </div>
          </div>
        </div>

        <ul className="headerlist">
          <li>{/* <a href="#">Início</a> */}</li>
          <li>
            <a href="#" title="Configurações">
              Config
            </a>
          </li>
          <li>
            <a href="#" title="Contato">
              Contato
            </a>
          </li>
          <li>
            <a href="#" title="Login">
              Login
            </a>
          </li>
        </ul>

        <div className="gps">
          <select onChange={onCityChange}>
            <option value="Recife - PE">Recife - PE</option>
            <option value="Olinda - PE">Olinda - PE</option>
            <option value="Paulista - PE">Paulista - PE</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Navbar;
