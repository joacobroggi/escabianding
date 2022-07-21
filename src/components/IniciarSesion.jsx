import React, { useState, useEffect } from 'react';
import Articulos from './Articulos';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function IniciarSesion() {
   
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

      /* form */
      let navigate = useNavigate();
      const [inputs, setInputs] = useState({});

      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs);
      }

      function click() {
        axios.post('/login', inputs)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                 alert('Error al logearse: ' + error);
              });
              /* reload */
              window.location.reload();
              navigate('/');
      }


      if (loading) {
        return <p style={{color: 'white'}}>Loading...</p>;
      } else {
        return (
        <div>
          <br />
          
          {data.estado ? <Articulos />
          : <div>
            
          <div className="contenedor">
          <p className='error'>{data.user}</p>
          <h1 className='h1-page'>Iniciar Sesion</h1>
          
          <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input type="text" name="email" value={inputs.email || ''} onChange={handleChange}/>
              <label>Contraseña:</label>
              <input type="password" name="password" value={inputs.password || ''} onChange={handleChange}/>
             
              <input type="submit"  value="Iniciar Sesión" onClick={click} className='btnIniciar'/>
          </form>
          <p className='noCuenta'>No tenes cuenta? <Link to='/registro'>Registrate Gratis</Link></p>
          
          </div>
      </div>}
          
        </div>
      );
      }
}

export default IniciarSesion;