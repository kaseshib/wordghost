import React, { useState, useEffect } from 'react'
import WordInfo from './WordInfo'
import { Button } from 'react-bootstrap'

export default function GameAction(props) {

    const onSubmit = () => props.handleSubmit();

    return (
        <div>
            <WordInfo isAfter={props.isAfter} letter={props.currLetter} word={props.prevWord} statement={props.statement}></WordInfo>

            <Button className="btn btn-primary btn-large" onClick={props.onSubmit} style={{ margin: '10px' }}>Confirm</Button>

            <Button className="btn btn-primary btn-large" onClick={props.handleChallenge} style={{ margin: '10px' }}>Challenge</Button>
        </div>
    )
}
