import { useState, useEffect } from "react";
import { utils } from "../utils";
import PlayAgain from "./PlayAgain";
import PlayNumber from "./PlayNumber";

const NumberDisplay = props => {
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  //introduce timer
  const [secondsLeft, setSecondsLeft] = useState(10);

	useEffect(() => {
  	if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
	      setSecondsLeft(secondsLeft - 1);
      }, 1000);
    	return () => clearTimeout(timerId);
  	}
  });  

  //evaluate button status
  const candidatesAreWrong = utils.sum(candidateNums) > props.candyCount; 
  const gameStatus = availableNums.length === 0 
  	? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'  

  const numberStatus = number => {
    if(!availableNums.includes(number)) {
      return 'used';
    }
    if(candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  }

  const onNumberClick = (number, currentStatus) => {
    if(gameStatus !== 'active' || currentStatus === 'used')  {
      return;
    }

    //generate new candidate array
    const newCandidateNums = 
      currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn!== number);
    if(utils.sum(newCandidateNums) !== props.candyCount){
      setCandidateNums(newCandidateNums);
    }else{
      const newAvailableNums =  availableNums.filter(
        n => !newCandidateNums.includes(n)
      );

      //redraw the stars which are playable
      props.setCandies(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }

  if(gameStatus !== 'active'){
    return (
      <>
        <PlayAgain onClick={props.resetGame} gameStatus={gameStatus} />
      </>
    )
  }

  return (
    <>
    <div>
          {
            utils.range(1, 9)
                 .map( numId =>
                      <PlayNumber 
                      key={numId} 
                      status = {numberStatus(numId)}
                      number={numId}
                      onClick={onNumberClick}/>
                     )
          }
          
    </div>
    <div className="timer h5">Time Remaining:  {secondsLeft}</div> 
    </>
  );
};

export default NumberDisplay;