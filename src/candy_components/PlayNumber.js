const PlayNumber = props => (
    <button className="number"
        onClick={() => console.log('Num ', props.number)}>
       {props.number}
    </button>
);

export default PlayNumber;