import { ReactDOM } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/inicio/inicio';
import About from './pages/sobre/sobre';
import AboutUs from './pages/quem-somos/quemSomos';
import Afirmative from './pages/acoes-afirmativas/acoes-afirmativas';
import Videos from './pages/videos/videos';
import Web from './pages/redes/redes';
import Partners from './pages/apoiadores-parceiros/apoiadores-parceiros';

const maping = () => {

    return (
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/sobre' element={<About />} />
                <Route exact path='/quem-somos' element={<AboutUs />} />
                <Route exact path='/acoes-afirmativas' element={<Afirmative />} />
                <Route exact path='/videos' element={<Videos />} />
                <Route exact path='/redes' element={<Web />} />
                <Route exact path='/apoiadores-e-parceiros' element={<Partners />} />
            </Routes>
    );

}

export default maping;
