import React from 'react'
import PlayerResults from './PlayerResults'

export default function PlayerContext() {
    return (
        <div>
            <PlayerResults username={"Kasey"} wins={2} games={3}></PlayerResults>
            <PlayerResults username={"John"} wins={1} games={3}></PlayerResults>
        </div>
    )
}
