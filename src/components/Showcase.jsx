import React from "react";
import "./showcase.css";
import showcaseImage from "../assets/tetera.jpg";

function Showcase() {
    return (
        <section className="showcase-outer-container">
            <div className="showcase-container">
                <div className="tag-container">
                    <div className="tag"> Improve your environment. </div>
                </div>
                <h2>Decorative and useful products for your home</h2>
                <p>Transforma tu hogar en un lugar de comodidad con nuestros productos de primera categoría! Desde utensilios hasta innovadoras herramientas de limpieza, nuestra tienda online ofrece una amplia gama de productos diseñados para simplificarte la vida.</p>
            </div>
            <div className="showcase-image">
                <img src={showcaseImage} />
            </div>
        </section>
    ) 
}

export default Showcase;