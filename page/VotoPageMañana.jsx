import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import simboloSena from "/img/Logosimbolo-SENA-PRINCIPAL.png";
import { MensajeError404, MensajeError500, MensajeVoto202 } from "../context/MensajeError";

function VotoPageMañana() {
  const { register, handleSubmit } = useForm();
  const { getCandi, votos } = useAuth();
  const { state } = useLocation();
  const token = state.token;
  const [candidatos, setCandidatos] = useState([]);
  const [mensaje, setMensaje] = useState();

  // Agregar un candidato adicional
  const candidatoPersonalizado = {
    id_ficha: "000000",
    ficha: "VOTO EN BLANCO",
    nombre: "VOTO EN BLANCO",
    apellido: "",
    img_candidato: "foto user blanco.png",
    tarjeton: "00",
    id_candidatos: 99999,
  };

  // obtenemos los candidatos
  useEffect(() => {
    const obtenerCandidatos = async () => {
      try {
        const result = await getCandi(token);

        setCandidatos(result.Data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerCandidatos();
  }, [getCandi, token]);

  // ejerce el voto
  const onSubmit = async (values) => {
    try {
      const result = await votos(token, values);

      if (result.resultData) {
        if (result.resultResponse) {
          setMensaje(<MensajeVoto202 />);
        }
      } else {
        if (result.errorData) {
          if (result.errorResponse === 500) {
            setMensaje(<MensajeError500 />);
          } else {
            if (result.errorResponse === 400) {
              setMensaje(<MensajeError404 />);
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const candidatosConPersonalizado = [...candidatos, candidatoPersonalizado];
  const ruta = `/img-candidatos/`;
  const renderCandidatos = candidatosConPersonalizado.map((candidato) => (
    // container-card
    <div className="container-tarjetones" key={candidato.id_candidatos}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-superior">
          <div className="container-jornada">
            <h4>FICHA: {candidato.id_ficha}</h4>
          </div>
          <div className="container-imbolo-sena">
            <img src={simboloSena} alt="Simbolo SENA" />
          </div>
        </div>
        <div className="container-name-formacion">
          <h3>{candidato.ficha}</h3>
        </div>

        <div className="container-img-candidato">
          <img src={`${ruta}${candidato.img_candidato}`} />
        </div>

        <div className="container-name-candidato">
          <h3>
            {candidato.nombre} {candidato.apellido}
          </h3>
        </div>

        <div className="container-numero-ficha">
          <button
            type="button"
            {...register("candidatoID")}
            onClick={() => onSubmit(candidato.id_candidatos)}
          >
            Votar Aquí
          </button>
          <p>{candidato.tarjeton}</p>
        </div>
      </form>
      {/*  */}
    </div>
  ));

  return (
    <div className="container-page-votos">
      <div className="container-text">
        <p>Candidatos Jornada Mañana</p>
      </div>

      <div className="container-all-tarjetones">
        <div className="container-candidatos">{renderCandidatos}</div>
      </div>

      {mensaje}
    </div>
  );
}

export default VotoPageMañana;
