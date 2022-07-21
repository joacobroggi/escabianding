import { Routes, Route, Outlet, Link } from "react-router-dom";
import ArticuloMobile from "./ArticuloMobile";
import ArticuloMobileCategorias from "./ArticuloMobileCategorias";
import aperitivosImg from '../img/aperitivos.png'
import products from '../products'
import Footer from "./Footer";




function crearArticulo(product) {
    
    return ( 
    <Link to={product.link}>
    <ArticuloMobileCategorias 
    name={product.name} 
    img={product.img}
    />
    </Link>
        )
}

function Articulos() {
    return (
       <div className="articulos">
           <br />
         <h1 className="h1-page">Articulos</h1>
           
            
           <div className="articulosFlexx">
           <Link to="/aperitivos">
            <ArticuloMobileCategorias img={aperitivosImg} name='Aperitivos' />
            </Link>
            
            {products.map(crearArticulo)}
           </div>
           <br />
           <br />
         {/* <Footer></Footer> */}
       </div>
    )
}

export default Articulos;