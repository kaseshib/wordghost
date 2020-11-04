import React from 'react'
import StaticWord from './StaticWord'
import AppendedLetter from './AppendedLetter'

export default function CurrentWord(props) {
    return (
        <p style={{ fontSize: '80px', height: '106px' }}>
            <AppendedLetter letter={props.isAfter === false ? props.currLetter : ''}></AppendedLetter>

            <StaticWord word={props.word}></StaticWord>

            <AppendedLetter letter={props.isAfter ? props.currLetter : ''}>
            </AppendedLetter>
        </p>
    )
}
