import React from 'react'
import SeriesWins from './SeriesWins'

export default function PlayerResults(props) {
    const col = props.color
    return (
        <div style={{ marginBottom: "1vh" }}>
            <h3 style={{ color: col, fontSize: "max(2.5vw, 14px)", marginBottom: "0.7vh" }}>{props.username}</h3>
            <SeriesWins wins={props.wins} games={props.games} color={props.color}></SeriesWins>
        </div>
    )
}
