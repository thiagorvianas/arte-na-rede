import React from "react";
import Title from "./Titles";
import './PreSection.css'

class PreSection extends React.Component {
    render() {
        return (
            <div className="pre-section">
                <Title text='Sobre o projeto' />
            </div>
        );
    }
}

export default PreSection;
