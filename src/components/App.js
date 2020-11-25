import React, { useEffect, useState } from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Game from './Game';
import WaitingRoom from './WaitingRoom'
import { Form } from 'react-bootstrap';

function App() {

  // const [id, setId] = useLocalStorage('id')
  // const [name, setName] = useLocalStorage('name')
  // const [userOne, setUserOne] = useLocalStorage("userOne")
  // const [userTwo, setUserTwo] = useLocalStorage("userTwo")

  // console.log(userOne)
  // console.log(userTwo)
  const [userOne, setUserOne] = useState("")
  const [userTwo, setUserTwo] = useState("")

  // const [numSubmitted, setNumSubmitted] = useLocalStorage(0)

  // console.log(numSubmitted)
  const [numSubmitted, setNumSubmitted] = useState(0)

  const [gameStarted, setGameStarted] = useState(false);


  return (
    // id ? <Game id={id} /> : <Login onIdSubmit={setId} />
    // gameStarted ? <Game id={id} />
    //   : id ? <WaitingRoom id={id} setGameStarted={setGameStarted} />
    //     : <Login onIdSubmit={setId} />
    numSubmitted === 3 ? <Game playerOne={userOne} playerTwo={userTwo} />
      : <Login
        setUserOne={setUserOne}
        setUserTwo={setUserTwo}
        setNumSubmitted={setNumSubmitted}
        numSubmitted={numSubmitted}></Login>
  )
}

export default App;
