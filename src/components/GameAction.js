import React, { useState, useEffect } from 'react'
import WordInfo from './WordInfo'
import { Button } from 'react-bootstrap'

export default function GameAction(props) {

    const onSubmit = () => props.handleSubmit();

    const onArrow = () => console.log('arrow pressed')

    return (
        <div style={{ position: "absolute", right: "0%", left: "0%", marginLeft: "auto", marginRight: "auto", top: "30%" }}>

            <WordInfo setIsAfter={props.setIsAfter} isAfter={props.isAfter} letter={props.currLetter} word={props.prevWord} statement={props.statement}></WordInfo>

            <Button className="btn btn-primary btn-large" onClick={props.handleSubmit} disabled={props.confirmDisabled} style={{ margin: '10px' }}>Confirm</Button>

            <Button className="btn btn-primary btn-large" onClick={props.handleChallenge} disabled={props.challengeDisabled} style={{ margin: '10px' }}>Challenge</Button>
        </div>
    )
}
