import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
function ArticuloMobileCarritoVacio(props) {

  const retirarCarrito = function(id) {
        let data = {
            identidad: id
        }

        axios.post('/retirarCarrito', data)
          .then(response => {
            console.log(response);
            
          }).catch(function (error) {
            console.log(error);
          });
          
          window.location.reload();  
    }

    return (
        <div className="articulo">
        
        <h1 className="tituloArticulo">
        

        <Link to="/comprar" style={{color: 'black'}}>{props.name}</Link>

        </h1>
       <div className="imgContainerArticulo">
          
           <img src={props.img} className='imgArticulo'/> 
           
       </div>
       
   </div>
    )
}

export default ArticuloMobileCarritoVacio;