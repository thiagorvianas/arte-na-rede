import React from 'react';
import './oficinas-dancando-pelo-piaui.css';
import Cidades from '../../../components/Cidades/Cidades';

const DancingPiaui = () => {
  return (
    <section>
      <section className="pre-section" id="oficinas-title">
        <h1 className="about-project oficinas-title" >Oficinas Dançando pelo Piauí</h1>
      </section>

      <section 
        id="oficinas-dancando-pelo-piaui-container"
                
      >
        <section className="oficinas-dancando-pelo-piaui-sec-1">
          <h3 className="title-3">O que são?</h3>
          <p className="paragrafo">O projeto ARTE NA REDE, pretende inaugurar uma nova realidade para o ensino das artes integradas, dando continuidade ao processo de descentralização para outros municípios. É um projeto arrojado, com muita projeção e que se estende para outras cidades e estados.</p>
        </section>
      </section>

      <Cidades />
    </section>
  );
}

export default DancingPiaui;