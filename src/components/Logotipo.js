import React from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

class Logotipo extends React.Component {
    render() {
        const { adress } = this.props;
        return (
            <Link className="navbar-brand" href="#" to='/'><img className='logo-arte-na-rede' alt='Logotipo do Projeto Arte na Rede' src={ adress } /></Link>
        );
    }
}

Logotipo.propTypes ={
    adress: PropTypes.string.isRequired,
};

export default Logotipo;
