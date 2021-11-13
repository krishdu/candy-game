
import './App.css';

function App() {
  return (
    <div className="game">
      <div className="help text-primary h5">
        Pick 1 or more numbers that sum to the number of candies
      </div>
      <div className="body">
        <div className="left">
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
          <div className="candy" />
        </div>
        <div className="right">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
        </div>
      </div>
      <div className="timer h5">Time Remaining: 10</div>
    </div>
  );
}

export default App;
