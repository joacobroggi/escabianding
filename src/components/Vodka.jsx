import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import vodka from '../vodka';
import ArticuloMobile from './ArticuloMobile';
import Footer from './Footer';
import IniciarSesion from './IniciarSesion';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function crearArticulo(product) {
    
    return ( 
        <ArticuloMobile 
        name={product.name} 
        img={product.img}
        precio={product.precio}
        carrito= 'Agregar al carrito por: $'
        product={product.product}
        key={product.id}
        />
    
        )
}

function Display() {
    return (
        <div>
<Link to='/comprar'><FontAwesomeIcon icon={faArrowLeft} className='icono'/></Link> 
  <div className="flex-cabecera">
  <h1 className='h1-page'>Vodkas</h1>
 
    
  </div>
   <div className="flexArticulos">
   {vodka.map(crearArticulo)}
   </div>
    <br />
    <Link to='/carrito' className='noCuenta'>Ir al carrito</Link>
    <Footer></Footer>
</div>
    )
}

function Vodka() {
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
export default Vodka;