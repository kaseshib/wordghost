import React, { useEffect, useState } from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Game from './Game';
import WaitingRoom from './WaitingRoom'

function App() {

  const [id, setId] = useLocalStorage('id')
  //   // const [name, setName] = useLocalStorage('name')
  const [gameStarted, setGameStarted] = useState(false);

  return (
    // id ? <Game id={id} /> : <Login onIdSubmit={setId} />
    gameStarted ? <Game id={id} />
      : id ? <WaitingRoom id={id} setGameStarted={setGameStarted} />
        : <Login onIdSubmit={setId} />

  )
}

export default App;
