import React, {useState} from 'react';

import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <ScoreBoard
        currScore={currScore}
        highScore={highScore}
      />
      <GameBoard
        currScore={currScore}
        highScore={highScore}
        setCurrScore={setCurrScore}
        setHighScore={setHighScore}
      />     
    </div>
  );
}

export default App;
