import React from "react";
import logotipoSENA from "/img/Logosimbolo-SENA-PRINCIPAL.png";
import imgError from "/img/icono-error.png";
import imgAlterText from "/img/img-alert-error.png";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navegate = useNavigate();
  function redirect() {
    navegate("/");
  }
  return (
    <div className="container-page">
      <div className="container-img-cennter">
        <div className="container-error-img">
          <div className="container-logo-text">
            <img src={logotipoSENA} alt="Logo del sena" />
            <p>SENA CPYA</p>
          </div>

          <div className="container-error-img404">
            <p>¡ERROR!</p>
            <img src={imgError} alt="imagen robot 404" />
            <br />
            <button onClick={redirect}>PAGINA PRINCIPAL</button>
          </div>
        </div>
      </div>

      <div className="container-error-text">
        <div className="container-error-center">
          <div className="text-404">
            <p className="text-1">No se pudo encontrar la pagina </p>
            <p className="text-2">
              Quiza escribiste algo mal, o estas accediendo desde otro sitio
            </p>
            <p className="text-2">
              Si este error no deberia estar sucediendo contactacte con servicio
              tecnico
            </p>
            <img src={imgAlterText} alt="imagen alert text" />
            <p className="text-adso">ADSO: 2560414</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
