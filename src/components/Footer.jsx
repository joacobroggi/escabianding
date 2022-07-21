import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Footer() {
    return (
      <div>
          <br />
        <footer>
            <br />
        <div className="contenedorListaFooter">
        <ul className="ulFooter">
            <li className="liFooterSocial">
            <a href="" style={{color: 'white'}}><FontAwesomeIcon icon={faTwitter} className='iconTw'/></a>
            </li>
            <li className="liFooterSocial">
                <a href="" style={{color: 'white'}}> <FontAwesomeIcon icon={faTiktok} className='iconTik'/></a>
           
            </li>
            <li className="liFooterSocial">
            
            <a href="https://wa.me/+543412756433" style={{color: 'white'}}><FontAwesomeIcon icon={faWhatsapp} className='iconWp' /> </a>
            </li>
            <li className="liFooterSocial ">
            
            <a href="https://www.instagram.com/joaco_broggi/?hl=es" style={{color: 'white'}}><FontAwesomeIcon icon={faInstagram} className='iconIg' /> </a>
            </li>
        </ul>
        </div>
       
        <div className="contenedorListaFooter">
        <ul className="ulFooter">
            <li className="liFooter">
            <Link to="/" style={{color:'white', textDecoration: 'none'}}>JMBroggi</Link>
            </li>
            <li className="liFooter">
            <Link to="/registro" style={{color:'white', textDecoration: 'none'}}>Registrarse</Link>
            </li>
            <li className="liFooter">
            <Link to="/iniciarSesion" style={{color:'white', textDecoration: 'none'}}>Iniciar Sesión</Link>
            </li>
            <li className="liFooter">
            <Link to="info" style={{color:'white', textDecoration: 'none'}}>Ayuda</Link>
            </li>
        </ul>
        </div>

        <p className="copyright">Website by JMBroggi©</p>
<br />
        </footer>

        
      </div>
    );
  }

  export default Footer;