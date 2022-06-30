import React from "react";
import PreSection from "../items/PreSection";
import "./MiniSaibaMais.css"
import { Link } from "react-router-dom";

class MiniSaibaMais extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <PreSection text="Saiba mais" />
                </div>

                <div className="saiba-mais-buttons">
                    <div className="bloco-01">
                        <div>
                            <Link id='navItem' className="nav-link active button-saiba-mais" to='/acoes-formativas'>
                                <div className="saiba-mais-box acoes-formativas" />

                                <p>AÇÕES FORMATIVAS</p>
                            </Link>
                        </div>

                        <div>
                            <Link id='navItem' className="nav-link active button-saiba-mais" to='/ocupa-a-rede'>
                                <div className="saiba-mais-box ocupa-a-rede" />

                                <p>OCUPA A REDE</p>
                            </Link>
                        </div>
                    </div>

                    <div className="bloco-02">
                        <div>
                            <Link id='navItem' className="nav-link active button-saiba-mais" to='/apresentacoes'>
                                <div className="saiba-mais-box apresentacoes" />

                                <p>APRESENTAÇÕES</p>
                            </Link>
                        </div>

                        <div className="button-saiba-mais">
                            <Link id='navItem' className="nav-link active button-saiba-mais" to='/artistas-convidades'>
                                <div className="saiba-mais-box artistas-convidades" />

                                <p>ARTISTAS CONVIDADES</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MiniSaibaMais;
