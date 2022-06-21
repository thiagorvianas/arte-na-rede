import React from "react";
import './inicio.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
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