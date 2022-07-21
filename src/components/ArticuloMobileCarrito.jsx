
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
function ArticuloMobileCarrito(props) {

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
        <button className="retirarCarrito" onClick={()=> retirarCarrito(props.id)}><FontAwesomeIcon icon={faXmark} /></button>
        <h1 className="tituloArticulo">
        

        <p style={{color: 'black'}}>{props.name}</p>

        </h1>
       <div className="imgContainerArticulo">
          
           <img src={props.img} className='imgArticulo'/> 
           
       </div>
       <h4>$ {props.price}</h4>
   </div>
    )
}

export default ArticuloMobileCarrito;