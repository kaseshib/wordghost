import React from 'react'

export default function GameCircle(props) {
    // var color = props.win ? "#2145B0" : "#C2C2C2"
    var color = props.win ? props.color : "#C2C2C2"


    var circleStyle = {
        padding: 5,
        margin: 8,
        display: "inline-block",
        backgroundColor: color,
        borderRadius: "50%",
        width: 12,
        height: 12,
    };

    return (
        <div style={circleStyle}>
        </div>
    )
}
