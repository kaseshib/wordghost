import React from 'react'
import PlayerContext from './PlayerContext'
// import InstructionBox from './InstructionBox'
import GameHeader from './GameHeader'

export default function GameContext() {
    return (
        <div>
            {/* <InstructionBox></InstructionBox> */}
            <GameHeader></GameHeader>
            <PlayerContext></PlayerContext>
        </div>
    )
}
