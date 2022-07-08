import React from "react";
import MiniSaibaMais from "../../components/MiniSaibaMais/MiniSaibaMais";

import '../sobre-o-projeto/sobre-o-projeto.css'

const About = () => {
    return (
        <section>
            <section className="pre-section" id="about-title">
                <h1 className="about-project" >Sobre o projeto</h1>
            </section>
            <section id="about-project" className="about-sec-1">
                <div className="about-text-1">
                        <h3 className="title-3">O que é o Arte na Rede Pi?</h3>
                        <p className="paragrafo">O projeto ARTE NA REDE, pretende inaugurar uma nova realidade para o ensino das artes integradas, dando continuidade ao processo de descentralização para outros municípios. É um projeto arrojado, com muita projeção e que se estende para outras cidades e estados.</p>
                </div>

                <div>
                    <iframe className="about-video" src="https://www.youtube.com/embed/mWFvKcfSvKk" title="1º Seminário ARTE NA REDE PI #2 - Mesa 1: Pensamentos Decoloniais" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>

            <section className="about-sec-2">
                <div>
                    <img className="about-photos" src="./image/sobre-o-projeto/fotos.png" alt="fotos do grupo" />
                </div>

                <div className="about-text-2">
                    <h3 className="title-3">Conheça o projeto</h3>
                    <p className="paragrafo">O Projeto contribuirá para a formação de novos artistas, que bem representam a cultura piauiense.</p>
                    
                    
                    <p className="paragrafo">O Projeto ARTE NA REDE é uma iniciativa arrojada, pelo alcance, difusão e democratização do acesso a bens culturais de qualidade que promove. Busca investir nos artistas piauienses, entendendo-se este mercado como a combinação: público / viabilidade econômica. Propõe, dessa forma, uma programação com artistas locais e nacionais gratuitos.</p>

                    <p className="paragrafo">O Estado do Piauí é muito rico em manifestações culturais. Como o estado é relativamente grande, havendo vários tipos de clima, vegetação e relevo, é comum a variedade de culturas conforme o local. As manifestações mais comuns no Piauí são: Bumba-Meu-Boi, Cavalo Piancó, Congada, Samba de Cumbuca, Reisado, bandolins, rabecas, entre outros. De Norte a Sul do Piauí, o fazer cultural característico do povo piauiense é apresentado de diversas formas. Seja na música, dança, teatro ou até nas misturas dessas manifestações culturais é que se encontra a nossa identidade. Em festivais que ultrapassam a capital Teresina, a cultura é preservada por meio do fomento de diferentes tipos de arte e apresentações pelo estado.</p>
                </div>
            </section>
            
            <div>
                <img className="a-arte-transforma" src="./image/sobre-o-projeto/a-arte-transforma.jpg" alt="a-arte-transforma" />
            </div>

            <section>
                <MiniSaibaMais />
            </section>
        </section>
    );
}

export default About;