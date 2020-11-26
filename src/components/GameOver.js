import React from 'react'
import { Button } from 'react-bootstrap'

export default function GameOver({ winner, resetAll }) {
    return (
        <div style={{ position: "absolute", right: "0%", left: "0%", marginLeft: "auto", marginRight: "auto", top: "50%" }}>
            <h1>{winner} wins!</h1>

            <Button onClick={resetAll}>Restart</Button>
        </div>

    )
}
