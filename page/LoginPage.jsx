import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { decodeToken } from "react-jwt";
import { useNavigate, Link } from "react-router-dom";
import imgDocumento from "/img/img-documento.png";
import imgFicha from "/img/img-ficha.png";
import imgEstudiantes from "/img/img-body-login.jpg";
import logoSENA from "/img/logo-sena.png";
import logotipoSENA from "/img/Logosimbolo-SENA-PRINCIPAL.png";
import lineaSVG from "/sgv/lineas.svg";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navegate = useNavigate();
  const { singIn } = useAuth();
  const [mensaje, setMensaje] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await singIn(values);

      if (result.resultSatus) {
        if (result.resultSatus === 200) {
          const token = result.token;
          const tokenDatos = decodeToken(token);
          if (tokenDatos.rol === "user") {
            const jornada = tokenDatos.jornadaID;

            if (jornada === 1) {
              navegate("/VotarMañana", { state: { token } });
            }
            if (jornada === 2) {
              navegate("/VotarTarde", { state: { token } });
            }
            if (jornada === 3) {
              navegate("/VotarNoche", { state: { token } });
            }
            if (jornada === 4) {
              navegate("/VotarVirtual", { state: { token } });
            }
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
        {/* formulario */}
        <div className="container-form">
          <div className="container-imgSena">
            <img src={logotipoSENA} alt="Logo del SENA" className="img-sena" />
            <h1 className="title-votaciones">
              Votaciones <br /> SENA
            </h1>
          </div>
          <form onSubmit={onSubmit}>
            {/* cedula */}
            <div className="container-input">
              <img
                src={imgDocumento}
                alt="Imagen icono cedula"
                className="img-documento"
              />
              <input
                type="text"
                placeholder="cedula"
                {...register("cedula", { required: true })}
              />
            </div>
            {/* ficha */}
            <div className="container-input">
              <img
                src={imgFicha}
                alt="Imagen icono ficha"
                className="img-ficha"
              />
              <input
                type="text"
                placeholder="ficha"
                {...register("ficha", { required: true })}
              />
            </div>
            {/* boton  */}
            <br />
            <button type="submit" className="button-ingresa">
              Ingresa
            </button>
          </form>

          <div className="container-img-estudiantes">
            <img
              className="img-estudiantes"
              src={imgEstudiantes}
              alt="Imagen de aprendices"
            />
          </div>

          <img src={logoSENA} alt="Imagen nombre SENA" className="logo-sena" />
        </div>

        {/* container text rigth */}
        <div className="container-fondo-info">
          <div className="container-info">
            <img src={lineaSVG} alt="SVG de líneas" />
            <div className="container-text">
              <p className="bienvenidad">
                ¡Bienvenido al dia de votaciones en el CPYA!
              </p>

              <p className="text-1">
                Aqui podras votar por el Aprendiz que representara tu jornada.
              </p>
              <p className="text-2">
                Recuerda cada voto cuenta y es una oportunidad para elegir a
                alguien <br /> comprometido y dispuesto a trabajar en beneficio
                de todos. Se trata <br /> de construir juntos un entorno
                educativo que refleje nuestras <br /> necesidades y
                aspiraciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mesaje modal */}
      {mensaje && (
        <div className="container-mensaje-overlay">
          <div className="conatiner-mensaje">
            <div className="container-blue">
              <p>{mensaje}</p>
            </div>

            <div className="container-white">
              <div className="container-mensaje-p">
                <p>
                  Revisa tus credenciales e intenta de <br /> nuevo o recarga la
                  pagina
                </p>
              </div>

              <div className="container-button">
                <button>
                  <Link to="/admin" className="regresar-link">
                    Regresa
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
