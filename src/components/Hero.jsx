import React from "react";
import "./hero.css";
import Logo from "../assets/househeart.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Hero() {
  return (
    <div className="hero">
        <div className="hero-container">
            <div className="hero-text-container">
                <div>
                    <h1 className="hero-title">Ame Home</h1>
                    <p className="hero-text">Tienda de productos especialmente escogidos para hacer o mejorar tu hogar de forma unica.</p>
                </div>
                <div className="hero-buttons">
                    <button className="button-buy">Buy products</button>
                    <button className="button-learn">
                        <span>Learn more</span>
                        <KeyboardArrowRightIcon fontSize="medium"/>
                    </button>
                </div>
            </div>
            <div className="hero-logo">
                <img src={Logo} alt="house heart" className="logo" width={350} height={350}/>
            </div>
        </div>
    </div>
  )
}

export default Hero;