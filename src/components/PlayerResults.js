import React from 'react'
import SeriesWins from './SeriesWins'

export default function PlayerResults(props) {
    const col = props.color
    return (
        <div>
            <h3 style={{ color: col }}>{props.username}&#160;</h3>
            <SeriesWins wins={props.wins} games={props.games} color={props.color}></SeriesWins>
        </div>
    )
}
