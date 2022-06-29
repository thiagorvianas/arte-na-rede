import React from "react";

class Title extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <h1 className="title" >{ text }</h1>
        );
    }
}


export default Title;