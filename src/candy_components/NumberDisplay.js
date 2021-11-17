import { useState } from "react";
import { utils } from "../utils";
import PlayNumber from "./PlayNumber";


const NumberDisplay = props => {
  const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5]);
  const [candidateNums, setCandidateNums] = useState([2, 3]);

  //evaluate button status
  const candidatesAreWrong = utils.sum(candidateNums) > props.starCount; 
  const numberStatus = number => {
    if(!availableNums.includes(number)) {
      return 'used';
    }
    if(candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  }

  return (
    <>
          {
            utils.range(1, 9)
                 .map( numId =>
                      <PlayNumber 
                      key={numId} 
                      status = {numberStatus(numId)}
                      number={numId}/>
                     )
          } 
    </>
  );
};

export default NumberDisplay;