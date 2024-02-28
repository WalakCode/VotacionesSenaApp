import simboloSena from "../public/img/Logosimbolo-SENA-PRINCIPAL.png";
import fotoJhon from "../public/img-candidatos/FotoJhonStevenpadillaluna.png"
import fotoLaura from "../public/img-candidatos/FotoLauraYanethEncisoBallesteros.png"
import fotoAnibal from "../public/img-candidatos/FotoRichardAníbalGrijalbaVargas.png"
import fotoMaria from "../public/img-candidatos/FotoMariavalentinaAlvarezLopez.png"

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
              <img src={fotoAnibal} alt="Imagen candidato" />
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
              <h4>
              TECNÓLOGO GESTIÓN INTEGRADA DE LA CALIDAD, MEDIO AMBIENTE, <br /> SEGURIDAD Y SALUD OCUPACIONAL
                
              </h4>
            </div>

            <div className="container-img-candidato">
              <img src={fotoJhon} alt="Imagen candidato" />
            </div>

            <div className="container-name-candidato">
              <h3>Jhon Steven padilla luna </h3>
            </div>

            <div className="container-numero-ficha">
              <h3>FICHA: 2774614 </h3>
              <button>Votar</button>
              <p>01</p>
            </div>
          </div>
        </div>
        {/*  */}
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
              <img src={fotoLaura} alt="Imagen candidato" />
            </div>

            <div className="container-name-candidato">
              <h3>Laura Yaneth Enciso Ballesteros </h3>
            </div>

            <div className="container-numero-ficha">
              <h3>FICHA: 2774614 </h3>
              <button>Votar</button>
              <p>08</p>
            </div>
          </div>
        </div>
        {/*  */}
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
              <img src={fotoAnibal} alt="Imagen candidato" />
            </div>

            <div className="container-name-candidato">
              <h3>Richard Aníbal Grijalba Vargas </h3>
            </div>

            <div className="container-numero-ficha">
              <h3>FICHA: 2774614 </h3>
              <button>Votar</button>
              <p>10</p>
            </div>
          </div>
        </div>
        {/*  */}
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
              <img src={fotoMaria} alt="Imagen candidato" />
            </div>

            <div className="container-name-candidato">
              <h3>María valentina Álvarez López </h3>
            </div>

            <div className="container-numero-ficha">
              <h3>FICHA: 2774614 </h3>
              <button>Votar</button>
              <p>29</p>
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
