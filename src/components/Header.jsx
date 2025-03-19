import React from "react";
import "./header.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <header>
            <div className="header-top">
                <p>Click aqui para ver catalogo</p>
                <ArrowForwardIcon className="arrowRight"/>
            </div>
            <div className="header-bottom">
                <HomeIcon className="homeLogo" fontSize="large"/>
                <MenuIcon className="menuLogo" />
                <nav className="nav-bar">
                    <a>Acerca de nosotros</a>
                    <a>Productos</a>
                    <a>Clientes</a>
                    <a>Noticias</a>
                    <a>Ayuda</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;