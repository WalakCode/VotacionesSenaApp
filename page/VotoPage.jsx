import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AlertError, AlertVoto, AlertVotoEXitoso } from "../context/AletError";

function VotoPage() {
  const { register, handleSubmit } = useForm();
  const { getCandi, votos } = useAuth();
  const { state } = useLocation();
  const token = state.token;
  const [candidatos, setCandidatos] = useState([]);
  const [mensaje, setMensaje] = useState();
  const navegate = useNavigate();

  // Agregar un candidato adicional
  const candidatoPersonalizado = {
    nombre: "Voto en blanco",
    cedula: "",
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
          setMensaje(<AlertVotoEXitoso />);
          setTimeout(() => {
            navegate("/");
          }, 2000);
        }
      } else {
        if (result.errorData) {
          if (result.errorResponse === 500) {
            setMensaje(<AlertError />);
            setTimeout(() => {
              navegate("/");
            }, 2000);
            // navegate("/");
          } else {
            if (result.errorResponse === 400) {
              // console.log(errorResponse);
              setMensaje(<AlertVoto />);
              setTimeout(() => {
                navegate("/");
              }, 2000);
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const candidatosConPersonalizado = [...candidatos, candidatoPersonalizado];
  // const ruta =`../public/img-candidatos/`;
  // const renderCandidatos = candidatosConPersonalizado.map((candidato) => (
  //   <div key={candidato.id_candidatos} className="container">
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <p>Nombre {candidato.nombre}</p>
  //       <p>{candidato.cedula}</p>
  //       <p>{candidato.ficha}</p>
  //       <img src={`${ruta}${candidato.img_candidato}`}/>
  //       <button
  //         type="button"
  //         {...register("candidatoID")}
  //         onClick={() => onSubmit(candidato.id_candidatos)}
  //       >
  //         Votar
  //       </button>
  //     </form>
  //   </div>
  // ));

  return (
    <div className="container-datos">
      {renderCandidatos}
      {mensaje}
    </div>
  );
}

export default VotoPage;
