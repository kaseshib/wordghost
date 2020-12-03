import React, { useState } from 'react';
import Login from './Login';
import Game from './Game';

function App() {

  const [userOne, setUserOne] = useState("")
  const [userTwo, setUserTwo] = useState("")

  const [numSubmitted, setNumSubmitted] = useState(0)

  // const [gameStarted, setGameStarted] = useState(false);


  return (
    numSubmitted === 3 ? <Game playerOne={userOne} playerTwo={userTwo} />
      : <Login
        setUserOne={setUserOne}
        setUserTwo={setUserTwo}
        setNumSubmitted={setNumSubmitted}
        numSubmitted={numSubmitted}></Login>
  )
}

export default App;
