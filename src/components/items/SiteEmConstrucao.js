import React from "react";
import '../items/SiteEmConstrucao.css'

class SiteEmConstrucao extends React.Component {
    render() {
        const { message } = this.props;

        return (
            <div className="em-construcao-container">
                <h1>{ message } estará disponível em breve!</h1>

                <img src="../image/site-em-construcao/paginaEmConstrucao.png" alt="Página em construção"/>
            </div>
        );
    }
}

export default SiteEmConstrucao;