import React from 'react'

export default function AppendedLetter(props) {
    return (
        <span style={{ color: 'red' }}>
            {props.letter}
        </span>
    )
}
