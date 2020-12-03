import React, { useState } from 'react'
import PlayerContext from './PlayerContext'
import InstructionBox from './InstructionBox'
import GameHeader from './GameHeader'
import { Row, Col } from 'react-bootstrap'



export default function GameContext(props) {
    // console.log(props.colors)
    const [showInstruction, setShowInstruction] = useState(false)

    const handleInstructionClick = () => setShowInstruction(true)
    const handleInstructionClose = () => setShowInstruction(false)

    return (
        // <div style={{ display: "flex" }}>
        //     <a onClick={handleInstructionClick}>
        //         <img width="50" src="/instruction.jpg"></img>
        //     </a>
        //     <InstructionBox
        //         show={showInstruction}
        //         handleClose={handleInstructionClose}>

        //     </InstructionBox>

        //     <GameHeader></GameHeader>
        //     <PlayerContext
        //         turn={props.turn}
        //         playOneWins={props.playOneWins}
        //         playTwoWins={props.playTwoWins}
        //         p1={props.playerOne}
        //         p2={props.playerTwo}
        //         colors={props.colors}
        //     ></PlayerContext>
        // </div >


        <Row style={{ height: "170px", alignContent: "center" }}>
            <Col style={{ alignSelf: "center" }}>

                <img width="50" src="/instruction.jpg" alt="Instructions" onClick={handleInstructionClick} style={{ float: "right" }}></img>

            </Col>
            <InstructionBox
                show={showInstruction}
                handleClose={handleInstructionClose}>

            </InstructionBox>


            <Col style={{ alignSelf: "center" }}>
                <GameHeader></GameHeader>
            </Col>
            <Col style={{ alignSelf: "center" }}>
                <PlayerContext
                    turn={props.turn}
                    playOneWins={props.playOneWins}
                    playTwoWins={props.playTwoWins}
                    p1={props.playerOne}
                    p2={props.playerTwo}
                    colors={props.colors}
                ></PlayerContext>
            </Col>
        </Row >




    )
}
