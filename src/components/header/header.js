import logoArteNaRede from './image/arte-na-rede-pi.png'
import './header.css';

const burgerMenu = () => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        return (
            < div className="burger-container" >
                <input type="checkbox" id="burger-checkbox-menu" />
                <label for="burger-checkbox-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        );
    }
};

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div id="test" className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"><img className='logo-arte-na-rede' alt='Logotipo do Projeto Arte na Rede' src={logoArteNaRede} /></a>
                <div className="menu collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Início</a>
                        </li>
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Quem somos</a>
                        </li>
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Ações afirmativas</a>
                        </li>
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Redes</a>
                        </li>
                        <li className="nav-item">
                            <a id='navItem' className="nav-link active" aria-current="page" href="#">Apoiadores/parceiros</a>
                        </li>
                    </ul>
                    {
                        // search //
                    /*  <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                </div>
            </div>
        </nav>
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
    );
};

export default Header;