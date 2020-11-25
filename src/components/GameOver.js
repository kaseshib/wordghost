import React from 'react'
import { Button } from 'react-bootstrap'

export default function GameOver({ winner, resetAll }) {
    return (
        <div>
            {winner} wins!

            <Button onClick={resetAll}>Restart</Button>
        </div>

    )
}
