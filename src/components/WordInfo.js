import React from 'react'
import CurrentWord from './CurrentWord'
import GamePrompt from './GamePrompt'
import EnteredKey from './EnteredKey'
// import leftArrow from '../../public/rightarrow.png'

export default function WordInfo(props) {

    const onLeft = () => props.setIsAfter(false)
    const onRight = () => props.setIsAfter(true)


    const gray = "invert(89%) sepia(1%) saturate(25%) hue-rotate(19deg) brightness(94%) contrast(96%)"
    const black = ""
    const red = "invert(10%) sepia(98%) saturate(7485%) hue-rotate(357deg) brightness(91%) contrast(122%)"

    let leftColor = black
    let rightColor = black

    if (props.isAfter === true) {
        rightColor = red
    } else if (props.isAfter === false) {
        leftColor = red
    }

    if (props.word === "" || props.letter === "") {
        leftColor = gray
        rightColor = gray
    }

    return (
        <div>
            <CurrentWord isAfter={props.isAfter} currLetter={props.letter} word={props.word}></CurrentWord>
            <GamePrompt statement={props.statement}></GamePrompt>

            <span style={{ display: "inline-flex", margin: "15px" }}>
                <img src={"leftarrow.png"} width="90px" height="97px" onClick={onLeft} style={{ filter: leftColor }} />

                <EnteredKey letter={props.letter}></EnteredKey>

                <img src={"rightarrow.png"} width="90px" height="97px" onClick={onRight} style={{ filter: rightColor }} />
            </span>

        </div>
    )
}
