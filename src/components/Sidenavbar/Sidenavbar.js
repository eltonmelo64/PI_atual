import React from "react";
import "./Sidenavbar.css";
import { Link } from "react-router-dom";

function Sidenavbar() {
  return (
    <>
      <div className="containerTI">
        <div className="caixa1">
          <h1>Vamos encontrar o seu rolê?</h1>
        </div>
      </div>

      <div className="container">
        <div className="caixa">
          <ul className="listaSidebar">
            <li className="nav-item">
              <Link className="nav-link" to="BuscaCompleta">
                Busca completa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="PertoDeVoce">
                Perto de você
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="PorCategorias">
                Por categorias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="SeusRoles">
              Seus Roles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidenavbar;
