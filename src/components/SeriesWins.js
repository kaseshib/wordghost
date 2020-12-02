import React from 'react'
import GameCircle from './GameCircle'

export default function SeriesWins(props) {
    const games = []

    for (var i = 0; i < props.wins; i++) {
        games.push(<GameCircle win={true} key={"win" + i} color={props.color}></GameCircle>)
    }
    for (var j = 0; j < props.games - props.wins; j++) {
        games.push(<GameCircle win={false} key={"empty" + j}></GameCircle>)
    }

    return (
        <div>
            {games}
        </div>
    )
}
