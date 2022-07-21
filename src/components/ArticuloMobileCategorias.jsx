import { Routes, Route, Outlet, Link } from "react-router-dom";

import axios from 'axios'

function ArticuloMobileCategorias(props) {

    return (
        <div className="articulo">
             <h1 className="tituloArticulo">

             <Link to="/ayuda" style={{color: 'black'}}>{props.name}</Link>

             </h1>
            <div className="imgContainerArticulo">
               
                <img src={props.img} className='imgArticulo'/> 
                
            </div>
             
             
             
        </div>
    )
}

export default ArticuloMobileCategorias;