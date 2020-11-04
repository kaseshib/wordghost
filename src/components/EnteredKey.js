import React from 'react'

export default function EnteredKey(props) {
    return (

        <div style={{ height: '110px', width: '110px', border: 'aqua', borderStyle: 'solid', margin: 'auto' }}>
            <p style={{ fontSize: '80px', lineHeight: '1' }}>
                {props.letter}
            </p>
        </div>
    )
}
