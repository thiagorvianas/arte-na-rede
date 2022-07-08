import { ReactDOM } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Inicio/Inicio';
import About from './pages/sobre-o-projeto/sobre-o-projeto';
import Formative from './pages/acoes-formativas/acoes-formativas';
import Occupe from './pages/ocupa-a-rede/ocupa-a-rede';
import Apresentations from './pages/apresentacoes/apresentacoes';
    import DancingPiaui from './pages/acoes-formativas/oficinas-dançando-pelo-piauí/oficinas-dançando-pelo-piauí';
    import OtherFormations from './pages/acoes-formativas/outras-formacoes/outras-formacoes';
    import FreeClasses from './pages/acoes-formativas/aulas-livres-de-danca/aulas-livres-de-danca';
    import Seminaries from './pages/acoes-formativas/seminarios/seminarios';

import Partners from './pages/artistas-convidades/artistas-convidades';
import React from 'react';

class Content extends React.Component {
    render() {
    return (
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/sobre-o-projeto' element={<About />} />
                <Route exact path='/acoes-formativas' element={<Formative />} />
                    <Route exact path='/acoes-formativas/dancando-pelo-piaui' element={<DancingPiaui />} />
                    <Route exact path='/acoes-formativas/outras-formacoes' element={<OtherFormations />} />
                    <Route exact path='/acoes-formativas/aulas-livres-de-danca' element={<FreeClasses />} />
                    <Route exact path='/acoes-formativas/seminarios' element={<Seminaries />} />
                <Route exact path='/ocupa-a-rede' element={<Occupe />} />
                <Route exact path='/apresentacoes' element={<Apresentations />} />
                <Route exact path='/artistas-convidades' element={<Partners />} />
            </Routes>
    );
    }
}

export default Content;
