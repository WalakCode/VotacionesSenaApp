import React from "react";
function redirect() {
  window.location.reload();
}

function MensajeError404() {
  return (
    <div className="container-mensaje-votos-error">
      <div className="conatiner-mensaje">
        <div className="container-blue"></div>

        <div className="container-white">
          <div className="container-mensaje-p">
            <p>El usuario ya habia votado</p>
          </div>

          <div className="container-button">
            <button onClick={redirect}>Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
function MensajeError500() {
  return (
    <div className="container-mensaje-votos-error">
      <div className="conatiner-mensaje">
        <div className="container-blue"></div>

        <div className="container-white">
          <div className="container-mensaje-p">
            <p>Error en el server, intenta de nuevo.</p>
          </div>

          <div className="container-button">
          <button onClick={redirect}>Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
function MensajeVoto202() {
  return (
    <div className="container-mensaje-votos">
      <div className="conatiner-mensaje">
        <div className="container-blue"></div>

        <div className="container-white">
          <div className="container-mensaje-p">
            <p>Voto realizado con exíto.</p>
          </div>

          <div className="container-button">
          <button onClick={redirect}>Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MensajeError404, MensajeError500, MensajeVoto202 };
