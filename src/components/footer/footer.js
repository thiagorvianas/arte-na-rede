import './footer.css';
import Logotipo from '../logotipo';

const Footer = () => {
  return (
    <footer className='footer'>
        {/* <Logotipo/> */}

        <div className='social text-center'>
            <i class="fa-brands fa-instagram"/>
            <i class="fa-brands fa-facebook-square"/>
            <i class="fa-solid fa-envelope"/>
        </div>
    </footer>
  );
};

export default Footer;