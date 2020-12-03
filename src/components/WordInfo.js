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
    const color = props.turn === 0
        ? "invert(18%) sepia(84%) saturate(3255%) hue-rotate(349deg) brightness(78%) contrast(90%)"
        : "invert(53%) sepia(35%) saturate(675%) hue-rotate(165deg) brightness(82%) contrast(94%)"


    let leftColor = black
    let rightColor = black

    if (props.isAfter === true) {
        rightColor = color
    } else if (props.isAfter === false) {
        leftColor = color
    }

    if (props.word === "" || props.letter === "") {
        leftColor = gray
        rightColor = gray
    }

    return (
        <div>
            <CurrentWord isAfter={props.isAfter} currLetter={props.letter} word={props.word} color={props.color}></CurrentWord>
            <GamePrompt statement={props.statement}></GamePrompt>

            <span style={{ display: "inline-flex", margin: "15px" }}>
                <img
                    src={"leftarrow.png"}
                    alt="left"
                    width="90px"
                    height="97px"
                    onClick={onLeft}
                    style={{ filter: leftColor }} />

                <EnteredKey letter={props.letter}></EnteredKey>

                <img
                    src={"rightarrow.png"}
                    alt="right"
                    width="90px"
                    height="97px"
                    onClick={onRight}
                    style={{ filter: rightColor }} />
            </span>

        </div>
    )
}
