import React from "react";
import "./logoReel.css";
import tikTokLogo from "../assets/tiktok.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import messengerLogo from "../assets/messenger.png";
import pinterestLogo from "../assets/pinterest.png";
import whatsappLogo from "../assets/whatsapp.png";
import linkedinLogo from "../assets/linkedin.png";
import youtubeLogo from "../assets/youtube.png";


function LogoReel() {
    return (
        <div>
            <div className="reel-outer-container">
                <div className="logo-reel-container">
                    <img src={tikTokLogo} alt="Example Logo 1" />
                    <img src={facebookLogo} alt="Example Logo 2" />
                    <img src={instagramLogo} alt="Example Logo 3" />
                    <img src={messengerLogo} alt="Example Logo 4" />
                    <img src={pinterestLogo} alt="Example Logo 5" />
                    <img src={whatsappLogo} alt="Example Logo 6" />
                    <img src={linkedinLogo} alt="Example Logo 7" />
                    <img src={youtubeLogo} alt="Example Logo 8" />
                </div>
            </div>
        </div>
    )
}

export default LogoReel;