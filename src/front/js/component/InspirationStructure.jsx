import React from "react";
import { Grid1 } from "./Grid1.jsx";
import { Grid2 } from "./Grid2.jsx";
import { Grid3 } from "./Grid3.jsx";


export const InspirationStructure = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <div className="inspotitle">
                        <h1><strong>Bodas Destacadas</strong></h1>
                    </div>
                </div>
                <div>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5 mt-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://cdn.caratsandcake.com/_images/cache/Genevive-and-Emaan-Fairmont-Grand-Del-Mar-03-257774-1686939976.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5><strong>Matrimonio Manuel & Ana</strong></h5>
                                    <p>Campamento Canaima en el Parque Nacional de Canaima</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://cdn.caratsandcake.com/_images/cache/indian-fusion-wedding-meredith-eshaan-09-232508-1671740654.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5><strong>Matrimonio Abu & Maria</strong></h5>
                                    <p>Modo Caracas en Altamira</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn.caratsandcake.com/_images/cache/grecia-and-sako-rosewood-mayakoba-038-242259-1677169334.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5><strong>Matrimonio Juan Pablo & Fernanda</strong></h5>
                                    <p>Hotel Ikin en Margarita</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="inspotitle mb-3 mt-4">
                    <p>La guía completa de todo lo relacionado con las bodas está aquí. Explore nuestra biblioteca de bodas, desde lugares para bodas en fincas hasta bodas rústicas y todos los estilos intermedios. O busque por ubicación y color para ver fotografías de bodas en su área y cómo dieron vida a la combinación de colores. Luego vaya más allá de la inspiración y contrate los equipos de ensueño de proveedores detrás de las bodas que ama.</p>
                </div>
                <Grid1 />
                <Grid2 />
                <Grid3 />
            </div>
        </div>
    )
}