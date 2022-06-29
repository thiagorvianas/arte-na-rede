import React from "react";
import './Inicio.css'
import { Link } from "react-router-dom";
import Title from "../../components/items/Titles";

const Home = () => {
    return (
        <>
            {/* 
            // carrossel de fotos
            <section>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="./image/photos/IMG_2494.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item active">
                            <img src="./image/photos/IMG_2482.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./image/photos/IMG_2697.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="welcome">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="welcome-title">
                        <Title text="Arte na Rede Pi" />
                    
                        <h5>uma nova realidade para o ensino das artes integradas</h5>
                    </div>

                    <div className="welcome-plus">
                        <Link id='navItem' className="nav-link active" aria-current="page" to='/sobre-o-projeto'>
                            <button type="button" className="btn-2">Saiba mais</button>
                        </Link>
                    </div>

                    <div className="arrow">
                        <img src="./image/carrossel/Arrow.png" alt="seta" />
                    </div>
                </div>
            </section>

            <section className="section">
                <section className="content">
                    <div className="section-image">
                        <img src="./image/photos/IMG_2739.jpg" alt="Izaká" />
                    </div>
                    <div className="section-text">
                        <h2>Conheça o Arte na Rede PI</h2>
                        <p>O projeto ARTE NA REDE, pretende inaugurar uma nova realidade para o ensino das artes integradas, dando continuidade ao processo de descentralização para outros municípios.</p>
                        <Link to='/sobre-o-projeto'>
                            <button className="btn">Saiba mais</button>
                        </Link>
                    </div>
                </section>

                <section className="content">
                    <div className="section-image">
                        <img src="./image/photos/IMG_2739.jpg" alt="Izaká" />
                    </div>
                    <div className="section-text">
                        <h2>Conheça o Arte na Rede PI</h2>
                        <p>O projeto ARTE NA REDE, pretende inaugurar uma nova realidade para o ensino das artes integradas, dando continuidade ao processo de descentralização para outros municípios.</p>
                        <Link to='/sobre-o-projeto'>
                            <button className="btn">Saiba mais</button>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Home;