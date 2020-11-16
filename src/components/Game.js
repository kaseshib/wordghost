import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import GameContext from './GameContext'
import GameAction from './GameAction'


export default function Game() {
    const [playOneWins, setPlayOneWins] = useState(0)
    const [playTwoWins, setPlayTwoWins] = useState(0)

    const [seriesScore, setSeriesScore] = useState([0, 0])
    const [currLetter, setCurrLetter] = useState('')
    const [prevWord, setWord] = useState('')
    const [isAfter, setIsAfter] = useState(true)
    const [statement, setStatement] = useState("Type in a letter")
    const [confirmDisabled, setConfirmDisabled] = useState(true)
    const [challengeDisabled, setChallengeDisabled] = useState(true)
    const [indicator, setIndicator] = useState("⭐")


    var gameStart = Math.floor(Math.random() * 2)

    const [turn, setTurn] = useState(gameStart)


    const handleKeyDown = (event) => {
        const code = event.keyCode

        if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey || event.repeat) {
            return
        }
        // backspace/delete
        else if (code === 8 || code === 46) {
            setIsAfter(null)
            setCurrLetter('');
            console.log("delete")
            setConfirmDisabled(true)
            setChallengeDisabled(false)
            // left 
        } else if (code === 37) {
            setIsAfter(false)
            if (currLetter) {
                setConfirmDisabled(false)
            }
            // right
        } else if (code === 39) {
            setIsAfter(true)
            if (currLetter) {
                setConfirmDisabled(false)
            }
            //submit
        } else if (code === 13) {
            handleSubmit(event)
            //letter
        } else if (code >= 65 && code <= 90) {
            setCurrLetter(event.key)
            console.log("pressed", event.key)
            setChallengeDisabled(true)
            if (isAfter === true || isAfter === false) {
                setConfirmDisabled(false)
            }

            if (prevWord) {
                setStatement("Press left or right arrow key and press enter to confirm")
            } else {
                setStatement("Press enter to confirm")
                setConfirmDisabled(false)

            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


    useEffect(() => {
        console.log("turn: " + turn)
    }, [turn])

    function handleSubmit() {
        console.log("submit attempt")
        let updated = prevWord

        if (isAfter) {
            updated += currLetter;
        } else if (isAfter === false) {
            updated = currLetter + updated;
        } else {
            return;
        };

        console.log("before", turn)
        setTurn(turn => 1 - turn)
        console.log("after", turn)


        setIsAfter(null)
        setCurrLetter('')
        setWord(updated)
        setStatement("Type in a letter")
        setConfirmDisabled(true)
        setChallengeDisabled(false)
    }

    function handleChallenge() {
        console.log("challenge attempt")

        setTurn(prevTurn => 1 - prevTurn)
        setIndicator("⚠️")
        setTimeout(500)
        console.log(indicator)
        promptPlayer();


        // setSeriesWins(prev => [...prev, ])

        setCurrLetter('')
        setWord('')
        setIsAfter(true)
        setStatement("Type in a letter")
        // alert("Player " + winner + " wins!")
        gameStart = 1 - gameStart
        setTurn(gameStart)
        setConfirmDisabled(true)
        setChallengeDisabled(true)
        setIndicator("⭐")

    }

    function promptPlayer() {
        let winner
        let intendedWord = prompt("What word were you thinking of?")
        if (checkValidWord(intendedWord)) {
            alert("Player " + ((1 - turn) + 1) + ", you win this round!")
            winner = 1 - turn
        } else {
            alert("Player " + ((1 - turn) + 1) + ", you lose this round!")
            winner = turn
        }
        console.log("winner: " + winner)

        if (winner === 0) {
            setPlayOneWins(playOneWins => playOneWins + 1)
        } else {
            setPlayTwoWins(playTwoWins => playTwoWins + 1)
        }
    }

    function checkValidWord(intended) {
        // call to backend here in the future

        if (!intended) {
            return false
        }
        return intended.length > 3
            && intended.includes(prevWord)
            && intended.split(" ").length < 2
    }


    return (

        <Container className="align-items-center" style={{ height: '100vh', textAlign: 'center' }} >
            <GameContext
                turn={turn}
                // seriesScore={seriesScore}
                playOneWins={playOneWins}
                playTwoWins={playTwoWins}
                indicator={indicator}
            >
            </GameContext>

            <GameAction
                handleSubmit={handleSubmit}
                handleChallenge={handleChallenge}
                currLetter={currLetter}
                prevWord={prevWord}
                isAfter={isAfter}
                statement={statement}
                confirmDisabled={confirmDisabled}
                challengeDisabled={challengeDisabled}
            ></GameAction>
        </Container >
    )
}