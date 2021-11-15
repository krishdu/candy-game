
import './App.css';
import { useState } from 'react';
import utils from './utils';
import PlayNumber from './candy_components/PlayNumber';


function App() {
  const [stars, setStars] = useState(utils.random(1, 9));
  return ( 
    <div className="game p-2">
      <div className="help text-primary h5">
        Pick 1 or more numbers that sum to the number of candies
      </div>
      <div className="body">
        <div className="left"> 

         { 
          utils.range(1, stars).map(startId =>
            <div key={startId} className="candy" />
          )
         }

        </div>

        <div className="right">

          {
            utils.range(1, 9).map(numId =>
              <PlayNumber key={numId} number={numId}/>
            )
          }
         
        </div>
      </div>
      <div className="timer h5">Time Remaining: 10</div>
    </div>
  );
}

export default App;
