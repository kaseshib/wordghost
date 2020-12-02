import React from 'react'
import PlayerResults from './PlayerResults'

export default function PlayerContext(props) {
    let p1 = props.p1
    let p2 = props.p2
    if (props.turn == 0) {
        p1 = "⭐ " + p1
    } else {
        p2 = "⭐ " + p2
    }


    return (
        <div style={{ margin: "auto", position: "absolute", right: "15%", top: "15%", textAlign: "right" }}>
            <PlayerResults username={p1} wins={props.playOneWins} games={3} color={props.colors[0]}></PlayerResults>
            <PlayerResults username={p2} wins={props.playTwoWins} games={3}
                color={props.colors[1]}></PlayerResults>
        </div>
    )
}
