import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Configuracoes from "./Pages/Configuracoes/Configuracoes";
import Contato from "./Pages/Contato/Contato";
import BuscaCompleta from "./Pages/BuscaCompleta/BuscaCompleta";
import PertoDeVoce from "./Pages/PertoDeVoce/PertoDeVoce";
import PorCategorias from "./Pages/PorCategorias/PorCategorias";
import SeusRoles from "./Pages/SeusRoles/SeusRoles";
import Recife from "./Pages/Cidades/Recife/Recife";
import Olinda from "./Pages/Cidades/Olinda/Olinda";
import Paulista from "./Pages/Cidades/Paulista/Paulista";
import PesquisaGeral from "./Pages/PesquisaGeral/PesquisaGeral";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Configuracoes" element={<Configuracoes />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="BuscaCompleta" element={<BuscaCompleta />} />
          <Route path="PertoDeVoce" element={<PertoDeVoce />} />
          <Route path="PorCategorias" element={<PorCategorias />} />
          <Route path="SeusRoles" element={<SeusRoles />} />
          <Route path="Recife" element={<Recife />} />
          <Route path="Olinda" element={<Olinda />} />
          <Route path="Paulista" element={<Paulista />} />
          <Route path="PesquisaGeral" element={<PesquisaGeral />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
