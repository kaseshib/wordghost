import React from 'react'
import PlayerResults from './PlayerResults'

export default function PlayerContext(props) {

    var p1 = "Kasey"
    var p2 = "John"

    if (props.turn == 0) {
        p1 = "⭐ " + p1
    } else {
        p2 = "⭐ " + p2
    }


    return (
        <div>
            <PlayerResults username={p1} wins={2} games={3}></PlayerResults>
            <PlayerResults username={p2} wins={1} games={3}></PlayerResults>
        </div>
    )
}
