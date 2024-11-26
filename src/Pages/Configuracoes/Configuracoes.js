import "./Configuracoes.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Configuracoes() {
  return (
    <div className="App">
      <div className="headerBox">
        <Navbar />
      </div>
      <h1>CONFIGURAÇÕES</h1>

      <Footer />
    </div>
  );
}
