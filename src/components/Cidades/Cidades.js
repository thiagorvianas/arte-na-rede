import React from 'react';
import './Cidades.css';
import { Link } from 'react-router-dom';

class Cidades extends React.Component {
    render() {
        return (
            <div>
                <div className="cidades-buttons">
                    <div className="cidade-blocos">
                        <div>
                            <Link
                                id='navItem'
                                className="nav-link active button-cidades"
                                to='/acoes-formativas/dancando-pelo-piaui/teresina'
                            >
                                <div className="cidades-box teresina" />

                                <p className="cidades-title">TERESINA</p>
                            </Link>
                        </div>

                        <div>
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/uniao'>
                                <div className="cidades-box uniao" />

                                <p className="cidades-title">UNIÃO</p>
                            </Link>
                        </div>
                    </div>

                    <div className="cidade-blocos">
                        <div>
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/castelo-do-piaui'>
                                <div className="cidades-box castelo" />

                                <p className="cidades-title">CASTELO DO PIAUÍ</p>
                            </Link>
                        </div>
                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/sao-joao-da-serra'>
                                <div className="cidades-box sao-joao-da-serra" />

                                <p className="cidades-title">SÃO JOÃO DA SERRA</p>
                            </Link>
                        </div>
                    </div>

                    <div className="cidade-blocos">
                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/cabeceiras'>
                                <div className="cidades-box cabeceiras" />

                                <p className="cidades-title">CABECEIRAS</p>
                            </Link>
                        </div>

                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/jose-de-freitas'>
                                <div className="cidades-box jose-de-freitas" />

                                <p className="cidades-title">JOSÉ DE FREITAS</p>
                            </Link>
                        </div>
                    </div>

                    <div className="cidade-blocos">
                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/bom-jesus'>
                                <div className="cidades-box bom-jesus" />

                                <p className="cidades-title">BOM JESUS</p>
                            </Link>
                        </div>

                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/currais'>
                                <div className="cidades-box currais" />

                                <p className="cidades-title">CURRAIS</p>
                            </Link>
                        </div>
                    </div>

                    <div className="cidade-blocos">
                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/sao-raimundo-nonato'>
                                <div className="cidades-box sao-raimundo-nonato" />

                                <p className="cidades-title">SÃO RAIMUNDO NONATO</p>
                            </Link>
                        </div>
                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/floriano'>
                                <div className="cidades-box floriano" />

                                <p className="cidades-title">FLORIANO</p>
                            </Link>
                        </div>
                    </div>

                    <div className="cidade-blocos">
                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-cidades" to='/acoes-formativas/dancando-pelo-piaui/parnaiba'>
                                <div className="cidades-box parnaiba" />

                                <p className="cidades-title">PARNAÍBA</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Cidades;
