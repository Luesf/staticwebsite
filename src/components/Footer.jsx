import React from "react";
import logo from "../assets/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div>
                <div className="logo-container">
                    <img src={logo} height={30} />  
                </div>
                <nav>
                    <a>Acerca de nosotros</a>
                    <a>Productos</a>
                    <a>Clientes</a>
                    <a>Noticias</a>
                    <a>Ayuda</a>
                </nav>
                <div className="socials-container">
                    <FacebookIcon sx={{color: "#BCBCBC"}} />
                    <InstagramIcon sx={{color: "#BCBCBC"}} />
                    <PinterestIcon sx={{color: "#BCBCBC"}} />
                </div>
                <p>&#9426; Ame Home, Inc. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;