import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';


function Letrero(props) {
  let estado = '';

  
  
  //get hours with state
  const [hours, setHours] = useState(new Date().getHours());
  
  if (hours >= 0 && hours < 4) {
    estado = 'Abierto';
  }else if (hours === 20 || hours === 21 || hours === 22 || hours === 23) {
    estado = 'Abierto';
  }
   else   {
    estado = 'Cerrado';
  } 
  
  
  
  
    return (
    
      <div>
        

        <div className="Letrero bg-dark">
       <h1 className="titulo-home"><FontAwesomeIcon icon={faBeer} className='iconHome'/>  Escabianding </h1>
         <h5 className="text-muted esta" >
           Se encuentra:
         </h5>
       
       <div className="sign">
       {estado}<span className="flicker"></span>
       </div>
      </div>

      <div>
          
      </div>

      </div>
    );
  }

  export default Letrero;