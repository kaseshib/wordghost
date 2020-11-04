import React from 'react'

export default function GameCircle(props) {
    var color = props.win ? "#2145B0" : "#C2C2C2"

    var circleStyle = {
        padding: 5,
        margin: 8,
        display: "inline-block",
        backgroundColor: color,
        borderRadius: "50%",
        width: 10,
        height: 10,
    };

    return (
        <div style={circleStyle}>
        </div>
    )
}
