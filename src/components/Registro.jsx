import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registro() {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
  };

  function click() {
    axios
      .post("/registro", inputs)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        alert("Error al registrarse: " + error);
      });
    navigate("/");
  }

  return (
    <div>
      <br />
      <div className="contenedor">
        <h1 className="h1-page">Registro</h1>

        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={inputs.nombre || ""}
            onChange={handleChange}
          />

          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            required
            value={inputs.apellido || ""}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />

          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            required
            value={inputs.password || ""}
            onChange={handleChange}
          />

          <input type="submit" value="Registrarme" onClick={click} className='btnIniciar'/>
        </form>

        <p className="noCuenta">
          Ya tenes cuenta? {"  "}
          <Link to="/iniciarSesion">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
