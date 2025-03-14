import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import "./pricing.css"

const productPricing = [
    {
        title: "Olla de Vidrio 1900ml",
        price: "Q195",
        sixPrice: "Q157",
        buttonText: "Lo quiero",
        specifics: ["Vidrio de Borosilicato.", "Resistente al calor.", "Apto para estufa electrica y de gas."]
    },
    {
        title: "Tetera de Vidrio 1800ml",
        price: "Q150",
        sixPrice: "Q112",
        buttonText: "Lo quiero",
        specifics: ["Vidrio de Borosilicato.", "Resistente al calor.", "Apto para estufa electrica y de gas."]
    },
    {
        title: "Tetera de Vidrio 1000ml",
        price: "Q120",
        sixPrice: "Q82",
        buttonText: "Lo quiero",
        specifics: ["Vidrio de Borosilicato.", "Resistente al calor.", "Apto para estufa electrica y de gas."]
    }
];

function Pricing() {
    return (
        <section>
            <div className="pricing-container">
                <div className="pricing-text-outer-container">
                    <div className="pricing-text-container">
                        <h2>Precios</h2>
                        <p>Obten un descuento al ordenar 6 o mas unidades del mismo producto!</p>
                    </div>
                </div>
                <div>
                    <div className="pricing-card-container">
                        {productPricing.map(({title, price, sixPrice, buttonText, specifics}) => (
                            <div className="pricing-card">
                                <h3>{title}</h3>
                                <div className="unitPrice-block">
                                    <span className="unit-price">{price}</span>
                                    <span className="unitText">/unidad</span>
                                </div>
                                <div className="sixPrice-block">
                                    <span className="six-price">{sixPrice}</span>
                                    <span className="sixText">/al comprar 6 unidades o mas</span>
                                </div>
                                <ul>
                                    {specifics.map((specific) => (
                                        <li>
                                            <CheckIcon fontSize="small" color="success"/>
                                            <span>{specific}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button>{buttonText}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;