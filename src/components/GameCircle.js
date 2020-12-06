import React from 'react'

export default function GameCircle(props) {
    // var color = props.win ? "#2145B0" : "#C2C2C2"
    var color = props.win ? props.color : "#C2C2C2"


    var circleStyle = {
        padding: "max(.5vw, 1px)",
        margin: "min(0.5vw, 19px) 0vw min(0.5vw, 19px) min(0.5vw, 19px)",
        display: "inline-block",
        backgroundColor: color,
        borderRadius: "50%",
        width: "max(8px, 1.5vw)",
        height: "max(8px, 1.5vw)",
    };

    return (
        <div style={circleStyle}>
        </div>
    )
}
