import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext';
import {ListGroup, Button} from 'react-bootstrap';

const ValidationRequired = () => {
  let {isEnglish} = useContext(LanguageContext);

  return (
    <div>
      {isEnglish
      ?
      <Alert variant="secondary">
      <div>
      Only users who have validated their account can create a new proposal. Take the Quiz to get validated
      </div>
      <div className ="floating">
        <Button className="alt2" to="/quiz">Take the quiz to get validated</Button>
      </div>
      
                  
    </Alert>

      :
      <Alert variant="secondary">
        <div>
        Solo los usuarios que validen ser ciudadanos de Querétaro podran crear nuevas propuestas, presiona aquí para validarte
        </div>
        <div className ="floating">
          <Button className="alt2" to="/quiz">Validar que soy Queretan@</Button>
        </div>
        
                    
      </Alert>
      }
    </div>
  );
};

export default ValidationRequired;
