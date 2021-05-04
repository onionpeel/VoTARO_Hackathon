import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/Home.css';

const About = () => {
  let {isEnglish} = useContext(LanguageContext);

  return (   
  <div className="App">
  {isEnglish ?
    <div>
      <div className="gray3">
        <div className="text-large">1. ¿Qué es <img src={logo} alt="VoTARO" width="250px" />?</div>
        <div className="main">Protocolo de gobernanza urbana para proponer, votar y ejectuar tareas y recompensarlas con la moneda digital de la ciudad de QueréTARO.</div>
        <div className="purple">1 ✋ Propon</div>
        <div className="purple">2 🗳️ Vota</div>
        <div className="purple">3 🥇 Obtén TARO</div>
        <div className="main">
        VoTARO es una aplicación descentralizada desarrollada con herramientas de la Web3.0, los contratos inteligentes del protocolo Compound y 
        tokens de ethereum para gestionar la gobernanza de eventos o necesidades urbanas de manera automatizada, transparente y descentralizada.</div>
        <div className="orange">2. Objetivo</div>
        <div className="main">
        Convertir a la ciudad de Querétaro en una Organización Autónoma Descentralizada que exista de manera automatizada en internet pero que 
        dependa fuertemente del talento humano para ejecutar tareas urbanas o virtuales que el protocolo no pueda completar por si mismo.</div>
        <div className="orange">3. ¿Qué es $TARO?</div>
        <div className="main">
        Es un token ERC20 que funciona como moneda digital de la ciudad de Querétaro, cada moneda te da poder de voto en el sistema de gobernanza VoTARO, donde puedes proponer
        votar y ejectuar propuestas de actividades o eventos en la ciudad para obtener más TARO.</div>
        <div className="orange">4. ¿Cómo obtengo $TARO?</div>
        <div className="main">
        <p>1. Para obener TARO necesitas una cartera web 3 como Metamask, puedes descargar una al dar click en el botón.</p></div>
        <Button className="Quiz" href="https://metamask.io" >Descargar Cartera</Button>
        <div className="main">
        <p>2. El token TARO solo se puede obtener como recompensa 🥇 al:</p>
        <p className="main2">✔️ Verificar que eres ciudadan@ queretan@ al final de esta pantalla.
        <p className="space">🗳️ Participar en la gobernanza de la ciudad.</p></p></div>
        <div className="orange">5. Beneficios para la ciudad</div>
        <div className="text-medium-left">
        <div >⛓️ Registro transparente e inmutable en blockchain.</div>
        <div >🏙️ Procesos urbanos en Contratos Inteligentes.</div>
        <div>🤖 Automatización y Descentralización de servicios.</div>
        <div >🧙‍♂️ Ciudadanos desarrollan habilidades digitales.</div>
        <div >🤝 Procesos urbanos en Contratos Inteligentes.</div>
        <div>🧬 Economía y Desarrollo Urbano Predictivos.</div>
      </div>
      <div className="gray3">    
        <div className="orange">¿Vives en Querétaro? pruebalo y obtén 100 TARO</div>
        <div className="main">Contesta este cuestionario para verififcar que eres queretano y recibe hasta 100 TARO para votar por las propuestas.</div>
        <Button className="Quiz" href="/quiz" >Verificar Queretan@</Button>
      </div> 
      </div> 
    </div>
    :
        <div>
           <div className="App">
            <div className="gray3">
              <div className="text-large">1. What's <img src={logo} alt="VoTARO" width="250px" />?</div>
              <div className="main">Urban Governance Protocol with recompensarlas con la moneda digital de la ciudad de QueréTARO.</div>
              <div className="purple">1 ✋ Propon</div>
              <div className="purple">2 🗳️ Vota</div>
              <div className="purple">3 🥇 Obtén TARO</div>
              <div className="main">
                VoTARO es una aplicación descentralizada desarrollada con herramientas de la Web3.0, los contratos inteligentes del protocolo Compound y tokens de ethereum para gestionar 
                la gobernanza de eventos o necesidades urbanas de manera automatizada, transparente y descentralizada.</div>
              <div className="orange">2. Objetivo</div>
              <div className="main">
                Convertir a la ciudad de Querétaro en una Organización Autónoma Descentralizada que exista de manera automatizada en internet pero que dependa fuertemente del 
                talento humano para ejecutar tareas urbanas o virtuales que el protocolo no pueda completar por si mismo .</div>
              <div className="orange">3. ¿Qué es $TARO?</div>
              <div className="main">
                Es un token ERC20 que funciona como moneda digital de la ciudad de Querétaro, cada moneda te da poder de voto en el sistema de gobernanza VoTARO, donde puedes proponer
                votar y ejectuar propuestas de actividades o eventos en la ciudad para obtener más TARO. </div>
              <div className="orange">4. ¿Cómo obtengo $TARO?</div>
              <div className="main"><p>1. Para obener TARO necesitas una cartera web 3 como Metamask, puedes descargar una al dar click en el botón.</p></div>
              <Button className="Quiz" href="https://metamask.io" >Descargar Cartera</Button>
              <div className="main">
                <p>2. El token TARO solo se puede obtener como recompensa 🥇 al:</p> 
                <p className="main2">✔️ Verificar que eres ciudadan@ queretan@ al final de esta pantalla.
                <p className="space">🗳️ Participar en la gobernanza de la ciudad.</p></p></div>
              <div className="orange">5. Beneficios para la ciudad</div>
              <div className="text-medium-left" ></div>       
            </div>
            <div className="gray3">    
              <div className="orange">¿Vives en Querétaro? pruebalo y obtén 100 TARO</div>
              <div className="main"> Contesta este cuestionario para verififcar que eres queretano y recibe hasta 100 TARO para votar por las propuestas.</div>
              <Button className="Quiz" href="/quiz" >Verificar Queretan@</Button>
            </div>
          </div> 
        </div>
      }
    </div>
  );
};

export default About;
