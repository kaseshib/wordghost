import React from 'react'
import PlayerContext from './PlayerContext'
// import InstructionBox from './InstructionBox'
import GameHeader from './GameHeader'


export default function GameContext(props) {
    // console.log(props.colors)
    return (
        <div style={{ display: "flex" }}>
            {/* <InstructionBox></InstructionBox> */}
            <GameHeader></GameHeader>
            <PlayerContext
                turn={props.turn}
                playOneWins={props.playOneWins}
                playTwoWins={props.playTwoWins}
                p1={props.playerOne}
                p2={props.playerTwo}
                colors={props.colors}
            ></PlayerContext>
        </div>
    )
}
