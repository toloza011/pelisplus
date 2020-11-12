import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/img/registro.svg";
import { auth } from "../../db/firebase";
import useUser from "../../Hooks/useUser";
import Home from "../Home/Home";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setUser] = useState(null);
  const { authUser } = useUser(user);
  const [alerta, setalerta] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setUser(user.user);

          console.log("El usuario logueado es: ");
          console.log(user.user.displayName);
          console.log("Estas siendo redireccionado");
        })
        .catch((error) => {
          console.log(error.message);
          setalerta("Las credenciales son incorrectas!");
          setTimeout(() => {
            setalerta("");
          }, 5000);
        });
    } else {
        setalerta("Los campos no pueden estar vacios!");
        setTimeout(() => {
            setalerta("");
          }, 5000);
    }
  };

  return user ? (
     <h1>Hola {user.displayName}</h1>
  ) : (
    <div className="main_movie">
      <div className="card_registro">
        <div className="form_login">
          <div className="login_title">
            <h3>Login!</h3>
          </div>
          <form onSubmit={login}>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Ingrese su contraseña..."
                className="input-pass"
              />
            </div>
            <div className="form-group">
              <button className="btn-registro">Entrar</button>
            </div>
          </form>
        </div>
        <div className="img_registro">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
