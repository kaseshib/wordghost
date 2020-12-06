import React from 'react'

export default function GameHeader({ font }) {
    return (

        <h1 className="display-1" style={{ fontSize: font || "max(9vw, 37px)" }} >
            <a href="/" style={{ color: "black", textDecoration: 'none' }}>
                WordGhost
            </a>
        </h1>
    )
}
