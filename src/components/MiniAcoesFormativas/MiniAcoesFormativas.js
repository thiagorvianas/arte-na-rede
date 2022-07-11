import React from "react";
import "./MiniAcoesFormativas.css"
import { Link } from "react-router-dom";

class MiniAcoesFormativas extends React.Component {
    render() {
        return (
            <div>
                <div className="acoes-formativas-buttons">
                    <div className="bloco-01">
                        <div>
                            <a
                                id='navItem'
                                className="nav-link active button-acoes-formativas"
                                href='http://www.redemoinhodedanca.com.br/' target='blank'
                            >
                                <div className="acoes-formativas-box aulas-livres-de-danca" />

                                <p className="acoes-formativas-title">AULAS LIVRES<br/>DE DANÇA</p>
                            </a>
                        </div>

                        <div>
                            <Link id='navItem' className="nav-link active button-acoes-formativas" to='/acoes-formativas/dancando-pelo-piaui'>
                                <div className="acoes-formativas-box oficinas-dancando-pelo-piaui" />

                                <p className="acoes-formativas-title">OFICINAS DANÇANDO<br/>PELO PIAUÍ</p>
                            </Link>
                        </div>
                    </div>

                    <div className="bloco-02">
                        <div>
                            <Link id='navItem' className="nav-link active button-acoes-formativas" to='/acoes-formativas/seminarios'>
                                <div className="acoes-formativas-box seminarios" />

                                <p className="acoes-formativas-title">SEMINÁRIOS</p>
                            </Link>
                        </div>

                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-acoes-formativas" to='/acoes-formativas/outras-formacoes'>
                                <div className="acoes-formativas-box outras-formacoes" />

                                <p className="acoes-formativas-title">OUTRAS FORMAÇÕES</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MiniAcoesFormativas;
