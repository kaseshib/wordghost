import React from 'react'
import SeriesWins from './SeriesWins'

export default function PlayerResults(props) {
    return (
        <div>
            <h3>{props.username}</h3>
            <SeriesWins wins={props.wins} games={props.games}></SeriesWins>
        </div>
    )
}
