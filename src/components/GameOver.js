import React from 'react'
import { Button } from 'react-bootstrap'

export default function GameOver({ winner, resetAll, color }) {
    return (
        <div style={{ position: "absolute", right: "0%", left: "0%", marginLeft: "auto", marginRight: "auto", top: "50%", color: color }}>
            <h1 style={{ margin: "20px 0px" }}>{winner} wins!</h1>

            <Button onClick={resetAll} size="lg">Restart</Button>
        </div>

    )
}
