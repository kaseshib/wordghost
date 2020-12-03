import React from 'react'
import WordInfo from './WordInfo'
import { Button, Row, Col } from 'react-bootstrap'

export default function GameAction(props) {

    // const onSubmit = () => props.handleSubmit();

    // const onArrow = () => console.log('arrow pressed')

    return (
        <>

            <Row style={{ placeContent: "center" }}>
                <WordInfo setIsAfter={props.setIsAfter} isAfter={props.isAfter} letter={props.currLetter} word={props.prevWord} statement={props.statement} color={props.color} turn={props.turn}></WordInfo>
            </Row>

            <Row>
                <Col style={{ textAlign: "right" }}>
                    <Button
                        className="btn btn-primary btn-large" onClick={props.handleSubmit} disabled={props.confirmDisabled} style={{
                            margin: '8px 0px',
                            fontSize: "18px",
                            width: "min(40vw, 150px)",
                            height: "40px"
                        }}
                    >Confirm</Button>
                </Col>

                <Col style={{ textAlign: "left" }}>
                    <Button
                        className="btn btn-primary btn-large" onClick={props.handleChallenge} disabled={props.challengeDisabled} style={{
                            margin: '8px 0px',
                            fontSize: "18px",
                            width: "min(40vw, 150px)",
                            height: "40px"
                        }}
                    >Challenge</Button>
                </Col>

            </Row>
        </>
    )
}
