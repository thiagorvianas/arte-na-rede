import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>        
                <div className='social text-center'>
                    <i className="fa-brands fa-instagram"/>
                    <i className="fa-brands fa-facebook-square"/>
                    <i className="fa-solid fa-envelope"/>
                </div>
            </footer>
          );
    }
}

export default Footer;