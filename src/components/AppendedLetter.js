import React from 'react'

export default function AppendedLetter(props) {
    return (
        <span style={{ color: props.color }}>
            {props.letter}
        </span>
    )
}
