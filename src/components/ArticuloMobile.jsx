import { Routes, Route, Outlet, Link } from "react-router-dom";

import axios from 'axios'

function ArticuloMobile(props) {
    const agregarCarrito = function(nombre) {
        // console.log(nombre);
        let data = {
            producto: nombre
        }

        axios.post('/agregarCarrito', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
         
        }
       
    
    return (
        <div className="articulo">
             <h1 className="tituloArticulo">

             <p style={{color: 'black'}}>{props.name}</p>

             </h1>
            <div className="imgContainerArticulo">
               
                <img src={props.img} className='imgArticulo'/> 
                
            </div>
             
             <button className="agregarAlcarrito" onClick={()=> agregarCarrito(props.product)}><p className="precioArticulo">{props.carrito}{props.precio}</p></button>
             
        </div>
    )
}

export default ArticuloMobile;