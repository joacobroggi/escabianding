import React from "react";
import "./App.css";
import './carrito.css';
import './registro.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faShoppingCart, faWineBottle, faQuestion, faSignIn  } from '@fortawesome/free-solid-svg-icons';

import Letrero from "./components/Letrero";
import CardHome from "./components/CardHome"
import Footer from "./components/Footer";
import Articulos from "./components/Articulos";
import Vodka from "./components/Vodka";
import Vino from "./components/Vino";
import Cerveza from "./components/Cerveza";
import Aperitivos from "./components/Aperitivos"
import Carrito from './components/Carrito';
import IniciarSesion from "./components/IniciarSesion";
import Registro from "./components/Registro";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comprar" element={<Comprar />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="info" element={<Ayuda />} />
          <Route path="iniciarSesion" element={<IniciarSesion />} />
          <Route path="registro" element={<Registro />} />
          <Route path="vodka" element={<Vodka />} />
          <Route path="vino" element={<Vino />} />
          <Route path="aperitivos" element={<Aperitivos />} />
          <Route path="cerveza" element={<Cerveza />} />
          <Route path="gin" element={<Vino />} />

          

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <p className="text-light preHeader">{!data ? "Loading..." : data.message}</p>
      <FontAwesomeIcon icon={['fas', 'code']} />
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand">
            <FontAwesomeIcon icon={faBeer} /> Escabianding 
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="desplegado">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/comprar" className="headerElementos">   <Button variant="dark" size="lg"><FontAwesomeIcon icon={faWineBottle}></FontAwesomeIcon> Comprar</Button></Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/carrito" className="headerElementos">
                <Button variant="dark" size="lg">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Carrito</Button>
                </Link>
                
              </Nav.Link>

              <Nav.Link>
                <Link to="/info" className="headerElementos"><Button variant="dark" size="lg"><FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon> Acerca de Escabianding</Button></Link>
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Logged(props) {
  return (
    <div>
      <h1 className='bienvenidaUser'>Bienvenid@ {props.user}</h1>
     
     
      <Letrero></Letrero>
      <br />
      
      <CardHome></CardHome>
      
      <Footer></Footer>
    </div>
  )
}

function Home() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `isLoggedIn`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
  
  
  if (loading) {
    return <p style={{color: 'white'}}>Loading...</p>;
  } else {
    return (
    <div>
      <br />
      
      {data.estado ? <Logged user={data.user}/>
      : <IniciarSesion />}
      
    </div>
  );
  }
}

function Comprar() {
  return (
    <div>
      <Articulos></Articulos>
      <Footer></Footer>
    </div>
  );
}





function Ayuda() {
  return (
   <div>
    <br />
     <div className="contenedor">
      <h2 className="h1-page">Informacion sobre este proyecto</h2>
      <br/>

      <p className="p-ayuda">
       <b className="cap"> Este es un sitio web de ejemplo, no se puede comprar ninguno de los productos y tiene el unico fin de servir de ejemplo de lo que soy capaz de hacer.</b>
        <br />
        <br />
        Escabianding es un proyecto de ejemplo en el que se demuestran conocimientos solidos en teconolgias de Desarrollo Web, tanto Frontend como Backend, tales como: <a href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a>, <a href="https://es.wikipedia.org/wiki/CSS">CSS</a>, <a href="https://es.wikipedia.org/wiki/JavaScript">Java Script</a>, <a href="https://es.wikipedia.org/wiki/React">React JS</a>, <a href="https://es.wikipedia.org/wiki/Node.js">Node JS</a>, <a href="https://es.wikipedia.org/wiki/Express.js">Express JS</a>, <a href="https://es.wikipedia.org/wiki/MongoDB">MongoDB</a>, <a href="https://code.tutsplus.com/es/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527">Mongoose</a>.
      <br />
      
      Además este proyecto hace uso de conocimientos en Autenticación, MERN Stack, uso de API y Diseño Web.
      <br />
      Si crees que le falta algo a esta página, encontraste un error o tenés preguntas me encantaría que me lo comentes por acá: <a href="mailto: jmbroggi.dev@gmail.com">jmbroggi.dev@gmail.com</a> o directamente a mi Instagram <a href="https://www.instagram.com/jmbroggi.dev/?hl=es">jmbroggi.dev</a>.
      </p>
      
    </div>
    <Footer></Footer>
   </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>404</h2>
      <p>
        <Link to="/">Ir al home</Link>
      </p>
    </div>
  );
}

export default App;
