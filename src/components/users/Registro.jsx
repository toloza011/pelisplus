import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/registro.svg";
import { Redirect, withRouter } from 'react-router-dom';
import { db, auth } from "../../db/firebase";

const Registro = () => {
  /*Estados de cada campo a rellenar */
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordc, setpasswordc] = useState("");
  const [alerta, setalerta] = useState("");
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState("");
  const registrar = (e) => {
    e.preventDefault();

    if (
      nombre.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      passwordc.length > 0
    ) {
      if (password !== passwordc) {
        setalerta("Las contraseñas son distintas!");
        setTimeout(() => {
          setalerta("");
        }, 5000);
      } else {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            setSuccess("Usuario creado exitosamente!");
            setnombre("");
            setpassword("");
            setpasswordc("");
            setemail("");
            auth.user.updateProfile({
              displayName: nombre,
            });
            return (<Redirect to="/login" user= {user}  />)
           
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    }else{
        setalerta("Los campos no pueden estar vacios!");
        setTimeout(() => {
          setalerta("");
        }, 5000);
    }
  };

  return (
    <div className="main_movie">
      <div className="card_registro">
        <div className="img_registro">
          <img src={Logo} alt="" />
        </div>
        <div className="form_registro">
          <div className="registro_title">
            <h3>Registrate y obten acceso a toda nuestra pagina!</h3>
          </div>
          <form onSubmit={registrar}>
            {success.length > 0 ? (
              <div className="form-group">
                <div className="success-register">
                  <b>{success}</b>
                </div>
              </div>
            ) : (
              ""
            )}
            {alerta.length > 0 ? (
              <div className="form-group">
                <div className="error-password">
                  <b>{alerta}</b>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={nombre}
                onChange={(e) => {
                  setnombre(e.target.value);
                }}
                placeholder="Ingrese su nombre..."
                className="input-nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Ingrese su email..."
                className="input-email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Contraseña</label>
              <input
                type="password"
                name="pass"
                id="pass"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="Ingrese su contraseña..."
                className="input-pass"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passc">Confirme su contraseña</label>
              <input
                type="password"
                name="passc"
                id="passc"
                value={passwordc}
                onChange={(e) => {
                  setpasswordc(e.target.value);
                }}
                placeholder="Confirme su contraseña..."
                className="input-passc"
              />
            </div>
            <div className="form-group">
              <button className="btn-registro">Registrarme</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
