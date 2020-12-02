import React from 'react'
import StaticWord from './StaticWord'
import AppendedLetter from './AppendedLetter'

export default function CurrentWord(props) {
    return (
        <p style={{ fontSize: '80px', height: '106px' }}>
            <AppendedLetter color={props.color} letter={props.isAfter === false ? props.currLetter : ''}></AppendedLetter>

            <StaticWord word={props.word}></StaticWord>

            <AppendedLetter color={props.color} letter={props.isAfter ? props.currLetter : ''}>
            </AppendedLetter>
        </p>
    )
}
