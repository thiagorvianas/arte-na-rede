import React from "react";
import Title from "./Titles";
import './PreSection.css'

class PreSection extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <div className="pre-section">
                <Title text={ text } />
            </div>
        );
    }
}

export default PreSection;
