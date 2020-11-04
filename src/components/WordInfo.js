import React from 'react'
import CurrentWord from './CurrentWord'
import GamePrompt from './GamePrompt'
import EnteredKey from './EnteredKey'

export default function WordInfo(props) {
    return (
        <div>
            <CurrentWord isAfter={props.isAfter} currLetter={props.letter} word={props.word}></CurrentWord>
            <GamePrompt statement={props.statement}></GamePrompt>
            <EnteredKey letter={props.letter}></EnteredKey>
        </div>
    )
}
