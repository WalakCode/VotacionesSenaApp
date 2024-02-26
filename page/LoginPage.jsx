import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import imgFondo from "../public/img/img-login.jpeg";
import imgDocumento from "../public/img/img-documento.png";
import imgFicha from "../public/img/img-ficha.png";
import imgEstudiantes from "../public/img/img-body-login.jpeg";
import logoSENA from "../public/img/Logotipo-SENA-PRINCIPAL.png";
import logotipoSENA from "../public/img/Logosimbolo-SENA-PRINCIPAL.png";
import "../public/style/style.css";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navegate = useNavigate();
  const { singIn } = useAuth();
  const [mensaje, setMensaje] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await singIn(values);

      // manejo de respuesta si se logea de manera correcta 202
      if (result.resultSatus) {
        if (result.resultSatus === 200) {
          const token = result.token;
          const tokenDatos = decodeToken(token);
          if (tokenDatos.rol === "user") {
            navegate("/voto", { state: { token } });
          }
          // logica del administrador
          if (tokenDatos.rol === "admin") {
            navegate("/admin", { state: { token } });
          }
        }
      }
      if (result.errorData) {
        if (result.errorResponse === 500) {
          setMensaje(result.errorData);
          navegate("/");
        }
        if (result.errorResponse === 400) {
          setMensaje(result.errorData);
          navegate("/");
        }
      }

      // menejo de errores si no se logea bien
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="container-login-body">
      <div className="container-login">
      <img src={logotipoSENA} alt="Logo del SENA" className="img-sena" />
        {/* formulario */}
        <div className="container-form">
          <p>
            Votaciones <br /> SENA
          </p>
          <form onSubmit={onSubmit}>
            {/* cedula */}
            <div className="container-input">
              <img src={imgDocumento} alt="Imagen icono cedula" />
              <input
                type="text"
                placeholder="cedula"
                {...register("cedula", { required: true })}
              />
            </div>
            {/* ficha */}
            <div className="container-input">
              <img src={imgFicha} alt="Imagen icono ficha" />
              <input
                type="text"
                placeholder="ficha"
                {...register("ficha", { required: true })}
              />
            </div>
            {/* boton  */}
            <br />
            <button type="submit">Ingresa</button>

            {mensaje && <p>{mensaje}</p>}
          </form>
          <div className="container-img-estudiantes">
            <img
              className="img-estudiantes"
              src={imgEstudiantes}
              alt="Imagen de aprendices"
            />
            <div className="circle top-right"></div>
            <div className="circle bottom-left"></div>
          </div>

          <img src={logoSENA} alt="Imagen nombre SENA"  className="logo-sena"/>
        </div>

        {/* contaier img */}
        <div className="container-img">
          <img src={imgFondo} alt="Imagen fondo login lado lateral" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
