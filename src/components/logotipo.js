import React from "react";

import { Link } from "react-router-dom";

class Logotipo extends React.Component {
    render() {
        return (
            <Link className="navbar-brand" href="#" to='/'><img className='logo-arte-na-rede' alt='Logotipo do Projeto Arte na Rede' src='./image/arte-na-rede-pi.png' /></Link>
        );
    }
}


export default Logotipo;