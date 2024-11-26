import React from "react";
import "./Navbar.css";
import HomeImage from "../../images/Home.png"; // Importação correta
import logoIMG from "../../images/Logo.png";
import Gps from "../../images/gpsImage.png";
import ico from "../../images/icone.ico";
<link rel="icon" href="/src/images/icone.ico"></link>;
import config from "../../images/Confirgurações-png.png";

function Navbar({ onCityChange }) {
  const handleSearch = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    const query = event.target.elements.search.value; // Obtém o valor do input
    console.log("Buscando por:", query);
    // Aqui você pode implementar a lógica de busca que deseja
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
            {/* <h1>Uhuuu!!!</h1> */}
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
                />
                <input
                  className="headerformbutton"
                  type="submit"
                  title="Pesquisar"
                  value={"🔎"}
                />



                <ul className="headerlist">
                  <li>{/* <a href="#">Início</a> */}</li>
                  <li>
                    <a href="#" title="Configurações">
                      Config
                    </a>{" "}
                    {/* 🏦 🏢 🏭 💼 🤝 */}
                  </li>
                  <li>
                    <a href="#" title="Contato">
                      Contato
                    </a>{" "}
                    {/* ✆ 📞 ✉ */}
                  </li>
                  <li>
                    <a href="#" title="Login">
                      Login
                    </a>{" "}
                    {/*  🏠 🔐 📧  */}
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
    </>
  );
}

export default Navbar;
