import React from "react";
import "./Footer.css";
import HomeImage from '../../images/Home.png';
import FaceBook from '../../images/Facebook_logo.png';
import Instagram from '../../images/Instagram_logo.png';
import Tiktok from '../../images/Tiktok_logo.png';

function Footer() {
    // Função para rolar até o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,          // Rola até o topo
            behavior: "smooth" // Rolagem suave
        });
    };

    return (
        <>
            <footer>
                <nav>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className="redes" src={FaceBook} alt="FaceBook" title="FaceBook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img className="redes" src={Instagram} alt="Instagram" title="Instagram" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <img className="redes" src={Tiktok} alt="Tiktok" title="Tiktok" />
                    </a>
                </nav>
                <section>
                    <p>© 2024 Uhuuu!!! Todos os direitos reservados.</p>
                </section>
                <div className="espelho">
                    <img 
                        className="homeEspelho" 
                        src={HomeImage} 
                        alt="Logo do Uhuuu"
                        onClick={scrollToTop} // Chama a função ao clicar
                        title="Ir para o topo"
                    />
                </div>
            </footer>
        </>
    );
}

export default Footer;
