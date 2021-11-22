
import './App.css';
import { useState } from 'react';
import { utils } from './utils';
import CandyDisplay from './candy_components/CandyDisplay';
import NumberDisplay from './candy_components/NumberDisplay';


function App() {
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
             setCandies={setCandies}/>
        </div>
      </div>
      <div className="timer h5">Time Remaining: 10</div>
    </div>
  );
}

export default App;
