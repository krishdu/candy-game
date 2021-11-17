import { utils } from "../utils";

const CandyDisplay = props => (
    <>
        { 
        utils.range(1, props.count)
            .map(startId => <div key={startId} className="candy" /> )
        }
    </>
);

export default CandyDisplay;