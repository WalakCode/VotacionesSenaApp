import simboloSena from "../public/img/Logosimbolo-SENA-PRINCIPAL.png";
import imgprueba from "../public/img-candidatos/FotoAlissonCatalinaGalvanArguello.png";

function VotoMañana() {
  return (
    <div className="container-page-votos">
      <div className="container-text">
        <p>Candidatos Jornada Mañana </p>
      </div>

      {/* conatiner de los tarjetones de los candidatos */}
      <div className="container-all-tarjetones">
        {/*  */}
        <div className="container-candidatos">
          <div className="container-tarjetones">
            <div className="container-superior">
              <div className="container-jornada">
                <h4>JORNADA: MAÑANA</h4>
              </div>
              <div className="container-imbolo-sena">
                <img src={simboloSena} alt="Simbolo SENA" />
              </div>
            </div>
            <div className="container-name-formacion">
              <h3>
                TECNÓLOGO GESTIÓN DE <br /> RECURSOS NATURALES
              </h3>
            </div>

            <div className="container-img-candidato">
              <img src={imgprueba} alt="Imagen candidato" />
            </div>

            <div className="container-name-candidato">
              <h3>Alisson Catalina Galvan </h3>
            </div>

            <div className="container-numero-ficha">
              <h3>FICHA: 2774600 </h3>
              <button>Votar</button>
              <p>03</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
}

export default VotoMañana;
