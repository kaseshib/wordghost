import React from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Game from './Game';

function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    id ? <Game id={id} /> : <Login onIdSubmit={setId} />

  )
}

export default App;
