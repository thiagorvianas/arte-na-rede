import React from "react";
import './Inicio.css'
import { Link } from "react-router-dom";
import Title from "../../components/items/Titles";
import PreSection from "../../components/items/PreSection";
import MiniSaibaMais from "../../components/MiniSaibaMais/MiniSaibaMais";

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
                <PreSection text="Sobre o projeto" />
                <div className="sobre-content-1">
                    <section className="sobre-1">
                        <div className="sobre-sec">
                            <div>
                                <h3 className="title-3">O que é o Arte na Rede Pi?</h3>
                                <p className="paragrafo">O projeto ARTE NA REDE, pretende inaugurar uma nova realidade para o ensino das artes integradas, dando continuidade ao processo de descentralização para outros municípios. É um projeto arrojado, com muita projeção e que se estende para outras cidades e estados. </p>
                            </div>

                            <div className="barra-orange" />
                        </div>

                        <div>
                            <iframe className="apresentation-video" src="https://www.youtube.com/embed/mWFvKcfSvKk" title="1º Seminário ARTE NA REDE PI #2 - Mesa 1: Pensamentos Decoloniais" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </section>

                    <section className="content">
                        <img src="./image/photos/photo-sobre-pg-inicial.png" alt="fotos do grupo" />

                        <div className="sobre-sec">
                            <div className="barra-orange" />

                            <div className="sobre-text-2">
                                <h3 className="title-3">Como atuamos?</h3>
                                <p className="paragrafo">O Projeto está configurado como uma iniciativa eminentemente democrática, uma vez que viabiliza o acesso às artes da cena de boa qualidade de forma gratuita a todas as camadas da população, notadamente a população de baixa renda.</p>
                            </div>
                        </div>

                    </section>
                </div>
            </section>

            <section>
                <MiniSaibaMais />
            </section>
        </>
    );
}

export default Home;