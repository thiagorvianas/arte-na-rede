import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>        
                <div className='social text-center'>
                    <i className="fa-brands fa-instagram"/>
                    <i className="fa-brands fa-facebook-square"/>
                    <i className="fa-solid fa-envelope"/>
                </div>

                <div className='patrocinadores'>
                    <img src='./image/patrocinio/Armazém_Paraíba_logo.png' alt='no' width='60px' />
                    <img src='./image/patrocinio/brasão_azul_LOGO-SEDUC_e_SECULT__png.png' width='350px' alt='no' />
                    <img src='./image/patrocinio/Cópia de PROMULTI-logo-final_aprovada.png' width='150px' alt='no' />
                    <img src='./image/patrocinio/Cópia de REDEMOINHO-LOGO-5-PRETO-WEB.png' width='75px' alt='no' />
                </div>
            </footer>
          );
    }
}

export default Footer;