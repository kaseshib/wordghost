import React from 'react'
import PlayerResults from './PlayerResults'

export default function PlayerContext(props) {
    // console.log(props.seriesScore)
    var p1 = "Kasey"
    var p2 = "John"

    if (props.turn == 0) {
        p1 = props.indicator + " " + p1
    } else {
        p2 = props.indicator + " " + p2
    }


    return (
        <div>
            <PlayerResults username={p1} wins={props.playOneWins} games={3}></PlayerResults>
            <PlayerResults username={p2} wins={props.playTwoWins} games={3}></PlayerResults>
        </div>
    )
}
