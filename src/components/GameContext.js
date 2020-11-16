import React from 'react'
import PlayerContext from './PlayerContext'
// import InstructionBox from './InstructionBox'
import GameHeader from './GameHeader'


export default function GameContext(props) {
    return (
        <div>
            {/* <InstructionBox></InstructionBox> */}
            <GameHeader></GameHeader>
            <PlayerContext
                turn={props.turn}
                // seriesScore={props.seriesScore}
                indicator={props.indicator}
                playOneWins={props.playOneWins}
                playTwoWins={props.playTwoWins}
            ></PlayerContext>
        </div>
    )
}
