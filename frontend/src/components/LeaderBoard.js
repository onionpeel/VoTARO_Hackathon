import { useContext } from 'react';
import Leader from './Leader';
import { LanguageContext } from '../contexts/LanguageContext';

const leaderArray = ['person A', 'person B', 'person C'];

const LeaderBoard = () => {
  let {isEnglish} = useContext(LanguageContext);

  const leaders = leaderArray.map((person, i) => {
    return (
      <Leader
        key={i}
        person={person}
      />
    );
  });

  return (
    <div>
      {isEnglish?

      <div>
        <div>
          Delegated TARO leaderboard
        </div>
        <div>
          {leaders}
        </div>
      </div>

      :

      <div>
        <div>
        </div>
        <div>
          Direcciones con más TARO delegado
        </div>
        <div>
          {leaders}
        </div>
      </div>
    }
    </div>
  );
};

export default LeaderBoard;
