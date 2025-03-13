import React from "react";
import "./showcase.css";
import tetera from "../assets/tetera.jpg";
import luces from "../assets/luces.jpg";
import vaso from "../assets/vaso.jpg";


function Showcase() {
    return (
        <section className="showcase-outer-container">
            <div className="showcase-container">
                <div className="tag-container">
                    <div className="tag"> Improve your environment. </div>
                </div>
                <h2>Productos utiles y decorativos para tu hogar.</h2>
                <p>Transforma tu hogar en un lugar de comodidad con nuestros productos de primera categoría! Desde utensilios hasta innovadoras herramientas de limpieza, nuestra tienda online ofrece una amplia gama de productos diseñados para simplificarte la vida.</p>
            </div>
            <div className="showcase-image">
                <img src={tetera} />
                <img src={luces} />
                <img src={vaso} />
            </div>
        </section>
    ) 
}

export default Showcase;