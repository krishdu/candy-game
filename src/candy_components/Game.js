import { useState } from 'react';
import { utils } from "../utils";
import CandyDisplay from './CandyDisplay';
import NumberDisplay from './NumberDisplay';


const  Game = props=> {
  const [candies, setCandies] = useState(utils.random(1, 9));
  return ( 
    <div className="game p-2">
      <div className="help text-primary h5">
        Pick 1 or more numbers that sum to the number of candies
      </div>
      <div className="body">
        <div className="left"> 
          <CandyDisplay count={candies}/>
        </div>
        <div className="right">
          <NumberDisplay
             candyCount={candies}
             setCandies={setCandies}
             resetGame={props.startNewGame}/>
        </div>
      </div>
    </div>
  );
}

export default Game;