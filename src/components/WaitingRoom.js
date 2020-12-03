import React from 'react'
import GameHeader from './GameHeader'
import { Button } from 'react-bootstrap'




export default function WaitingRoom(props) {

    function handleStart(e) {
        e.preventDefault();
        // console.log(props)
        props.setGameStarted(true)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <GameHeader>
            </GameHeader>
            <p>Game ID: {props.id}</p>
            <Button onClick={handleStart}>Start Game</Button>
        </div>
    )
}
