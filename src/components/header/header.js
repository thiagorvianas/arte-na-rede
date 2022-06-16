import React from 'react';
import './header.css';

import Logotipo from '/home/thiago/Documentos/Projetos TH DEV/arte-na-rede/arte-na-rede/src/components/logotipo.js'

import { Link } from 'react-router-dom';

const burgerMenu = (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <div className="burger-container" >
            <input type="checkbox" id="burger-checkbox-menu" />
            <label htmlFor="burger-checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    </button>
);

const mainMenu = (
    <nav className="menu collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/'>Início</Link>
            </li>

            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/sobre'>Sobre</Link>
            </li>

            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/quem-somos'>Quem somos</Link>
            </li>

            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/acoes-afirmativas'>Ações afirmativas</Link>
            </li>

            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/videos'>Videos</Link>
            </li>

            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/redes'>Redes</Link>
            </li>

            <li className="nav-item">
                <Link id='navItem' className="nav-link active" aria-current="page" to='/apoiadores-e-parceiros'>Apoiadores/parceiros</Link>
            </li>
        </ul>
    </nav>
);

class Header extends React.Component {
    render() {
        return (

                <header className="navbar navbar-expand-lg bg-light p-0">
                    <div id="head" className="container-fluid p-0">

                        {burgerMenu}

                        <Logotipo />
                        
                        {mainMenu}

                    </div>
                </header>

        );
    }
}

export default Header;

// TESTS //

    // search //
/*  <form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit">Search</button>
    </form> */

// <header id='cabeçalho'>
//     <a href='#'>
//         <img className='logo-arte-na-rede' alt='Logotipo do Projeto Arte na Rede' src={logoArteNaRede} />
//     </a>

//     <nav className="menu">
//         <a href="#">Início</a>
//         <a href="#">Sobre</a>
//         <a href="#">Quem somos</a>
//         <a href="#">Ações afirmativas</a>
//         <a href="#">Videos</a>
//         <a href="#">Redes</a>
//         <a href="#">Apoiadores/parceiros</a>
//     </nav>

//     {burgerMenu()}
// </header>