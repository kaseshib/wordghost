import React from 'react'
import WordInfo from './WordInfo'
import { Button } from 'react-bootstrap'

export default function GameAction(props) {

    function handleSubmit() {
        console.log("hiha attempt")
    }

    function handleChallenge() {
        console.log("challenge attempt")
    }

    return (
        <div>
            <WordInfo isAfter={props.isAfter} letter={props.letter} word={props.word} statement={props.statement}></WordInfo>

            <Button className="btn btn-primary btn-large" onClick={handleSubmit} style={{ margin: '10px' }}>Confirm</Button>

            <Button className="btn btn-primary btn-large" onClick={handleChallenge} style={{ margin: '10px' }}>Challenge</Button>
        </div>
    )
}
