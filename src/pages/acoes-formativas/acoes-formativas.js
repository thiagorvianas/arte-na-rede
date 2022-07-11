import React from "react";
import MiniAcoesFormativas from "../../components/MiniAcoesFormativas/MiniAcoesFormativas";
import './AcoesFormativas.css'


const Formative = () => {
    return (
        <section>
            <section className="pre-section" id="about-title">
                <h1 className="about-project" >Ações formativas</h1>
            </section>

            <section 
                id="acoes-formativas-container"
                
                >
                <section className="acoes-formativas-sec-1">
                    <h3 className="title-3">O que é o Arte na Rede Pi?</h3>
                    <p className="paragrafo">O projeto ARTE NA REDE, pretende inaugurar uma nova realidade para o ensino das artes integradas, dando continuidade ao processo de descentralização para outros municípios. É um projeto arrojado, com muita projeção e que se estende para outras cidades e estados.</p>
                </section>

                <MiniAcoesFormativas />
            </section>
        </section>
    );
}

export default Formative;