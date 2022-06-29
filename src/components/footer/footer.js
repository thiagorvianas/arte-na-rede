import React from 'react';
import './footer.css';
import Logotipo from '../logotipo';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <div className='social text-center'>
                    <div>
                        <Logotipo adress="./image/patrocinio/ARTE-NA-REDE-PI-LOGO-PRETO-E-AMARELO.png" />
                    </div>

                    <div className="social-container">
                        <div className="follow-us">
                            <p>ACOMPANHE NOSSAS<br />REDES SOCIAIS</p>
                            <div className='barra-light' />
                        </div>

                        <ul className='social-button'>
                            <li>
                                <a href='https://www.instagram.com/artena_rede/' target="blank">
                                    <img src='./image/patrocinio/instagram.png' alt='no' width='35px' />
                                </a>
                            </li>

                            <li>
                                <a href='https://www.facebook.com/artenaredepi/' target="blank">
                                    <img src='./image/patrocinio/facebook.png' alt='no' width='35px' />
                                </a>
                            </li>

                            <li>
                                <a href='https://www.youtube.com/channel/UC_sFWsgggd5M5ZtoMsOR8bw' target="blank">
                                    <img src='./image/patrocinio/youtube.png' alt='no' width='35px' />
                                </a>
                            </li>

                            <li>
                                <a href='mailto:redemoinho.danca@gmail.com' target="blank">
                                    <img src='./image/patrocinio/email.png' alt='no' width='35px' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='patrocinadores'>
                    <div className="logos-patrocinio">
                        {/* REDEMOINHO */}
                        <div className='patro-logo'>
                            <p>Produção</p>
                            <a href='http://redemoinhodedanca.com.br/' target="blank">
                                <img className="redemoinho" src='./image/patrocinio/REDEMOINHO-LOGO-5-COR-WEB.png' alt='no' />
                            </a>
                        </div>

                        <div className='barra-dark' />

                        <div className='patro-logo'>
                            <p>Realização</p>
                            {/* PROMULT */}
                            <a href='http://instagram.com/promultipi/' target="blank">
                                <img className='promulti' src='./image/patrocinio/Cópia de PROMULTI-logo-final_aprovada.png' alt='no' />
                            </a>
                        </div>
                            
                        <div className='barra-dark' />

                        <div className='patro-logo'>
                            <p>Patrocínio</p>
                            {/* SECULT */}

                            <a href='http://www.cultura.pi.gov.br/' target="blank">
                                <img className='secult' src='./image/patrocinio/SECULT.png' alt='no' />
                            </a>
                        </div>

                    </div>

                    <div className='copyright'>
                        <p>© Copyright 2022. Arte na Rede PI. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;