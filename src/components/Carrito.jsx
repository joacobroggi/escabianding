
import React, { useState, useEffect } from 'react';
import IniciarSesion from './IniciarSesion';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ArticuloMobile from './ArticuloMobile';
import ArticuloMobileCarrito from './ArticuloMobileCarrito';
import ArticuloMobileCarritoVacio from './ArticuloMobileCarritoVacio';

function Display() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `/carrito`
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
  
 
  
  

  function agregarCarrito(data) {
      return (
          <ArticuloMobileCarrito
            name={data.name}
            img={data.img}
            price={data.precio}
            id={data.id}
            key={data.id}
          />

         
      )
  }
 
  
  
if (loading) {
  return <p style={{color: 'white'}}>Loading...</p>;
} else {
  return (
    <div>
      <h2 className='h1-page'>Carrito</h2>
      <div className="refre">
      
      <button className='refresh mobile' onClick={() => window.location.reload()}>Recargar</button>
      </div>
     
      
     <div className="flexArticulos">
     
     {data?.map(agregarCarrito)}
     <ArticuloMobileCarritoVacio
            name={"Agregar Productos"}
            img={"https://media.istockphoto.com/vectors/transparent-wine-bottle-vector-id466566071?k=20&m=466566071&s=612x612&w=0&h=Px8Cmxtw_MvICW_MF4YZerCJKIgPbJMX3uRa4XdLLpQ="}
            precio={null}
            id={1000}
            key={1000}
          />
     </div>

     
    <br />
    <Footer></Footer>
    </div>
  )
}
  
}

function Carrito() {
   
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
          
          {data.estado ? <Display />
          : <IniciarSesion />}
          
        </div>
      );
      }

}


export default Carrito;