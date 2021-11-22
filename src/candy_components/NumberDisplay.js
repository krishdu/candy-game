import { useState } from "react";
import { utils } from "../utils";
import PlayNumber from "./PlayNumber";

const NumberDisplay = props => {
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  //evaluate button status
  const candidatesAreWrong = utils.sum(candidateNums) > props.candyCount; 
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
    if(currentStatus === 'used')  {
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

  return (
    <>
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
    </>
  );
};

export default NumberDisplay;