import React from 'react'
import PlayerContext from './PlayerContext'
// import InstructionBox from './InstructionBox'
import GameHeader from './GameHeader'


export default function GameContext(props) {
    return (
        <div style={{ display: "flex" }}>
            {/* <InstructionBox></InstructionBox> */}
            <GameHeader></GameHeader>
            <PlayerContext
                turn={props.turn}
                // seriesScore={props.seriesScore}
                playOneWins={props.playOneWins}
                playTwoWins={props.playTwoWins}
                p1={props.playerOne}
                p2={props.playerTwo}
            ></PlayerContext>
        </div>
    )
}
