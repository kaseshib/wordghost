import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import GameContext from './GameContext'
import GameAction from './GameAction'
import GameOver from './GameOver'
import ChallengeModal from './ChallengeModal'
import ResultModal from './ResultModal'

export default function Game({ playerOne, playerTwo }) {
    const [playOneWins, setPlayOneWins] = useState(0)
    const [playTwoWins, setPlayTwoWins] = useState(0)

    const [currLetter, setCurrLetter] = useState('')
    const [prevWord, setWord] = useState('')
    const [isAfter, setIsAfter] = useState(true)
    const [statement, setStatement] = useState("Type in a letter")
    const [confirmDisabled, setConfirmDisabled] = useState(true)
    const [challengeDisabled, setChallengeDisabled] = useState(true)
    const [indicator, setIndicator] = useState("⭐")
    const [gameOver, setGameOver] = useState(false)

    const [challengedWord, setChallengedWord] = useState("")
    // const [activeInput, setActiveInput] = useState(true)

    const [showModal, setShowModal] = useState(false)
    const [displayAlert, setDisplayAlert] = useState(false)

    const [prevChallengeSuccess, setPrevChallengeSuccess] = useState(false)

    var gameStart = Math.floor(Math.random() * 2)

    const [turn, setTurn] = useState(gameStart)



    const handleKeyDown = (event) => {
        const code = event.keyCode

        if (showModal || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey || event.repeat) {
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
        if (playOneWins === 3 || playTwoWins == 3) {
            setGameOver(true)
        }
    }, [playOneWins, playTwoWins]);


    useEffect(() => {
        if (!challengedWord) {
            return
        }
        console.log(challengedWord)
        console.log("boo yah!")
        let winner
        let playerChallenged = 1 - turn ? playerTwo : playerOne
        if (checkValidWord(challengedWord)) {
            setPrevChallengeSuccess(true)
            winner = 1 - turn
        } else {
            winner = turn
            setPrevChallengeSuccess(false)
        }


        if (winner === 0) {
            setPlayOneWins(playOneWins => playOneWins + 1)
        } else {
            setPlayTwoWins(playTwoWins => playTwoWins + 1)
        }

        displayResult()
        resetWordInfo()
    }, [showModal]);

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

        setTurn(turn => 1 - turn)
        setIsAfter(null)
        setCurrLetter('')
        setWord(updated)
        setStatement("Type in a letter")
        setConfirmDisabled(true)
        setChallengeDisabled(false)
    }

    function handleChallenge() {
        console.log("challenge attempt")
        setShowModal(true)
        // promptPlayer();


        // setCurrLetter('')
        // setWord('')
        // setIsAfter(true)
        // setStatement("Type in a letter")
        // gameStart = 1 - gameStart
        // setTurn(gameStart)
        // setConfirmDisabled(true)
        // setChallengeDisabled(true)
        // setIndicator("⭐")


    }

    function promptPlayer() {
        let winner
        let playerChallenged = 1 - turn ? playerTwo : playerOne

        let intendedWord = prompt(playerChallenged + ", what word were you thinking of?")


        if (checkValidWord(intendedWord)) {
            alert(playerChallenged + ", you win this round!")
            winner = 1 - turn
        } else {
            alert(playerChallenged + ", you lose this round!")
            winner = turn
        }

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



    function resetWordInfo() {

        setCurrLetter('')
        setWord('')
        setIsAfter(true)
        setStatement("Type in a letter")
        setConfirmDisabled(true)
        setChallengeDisabled(true)
    }

    function resetGameContext() {
        setPlayOneWins(0)
        setPlayTwoWins(0)
        setGameOver(false)
    }

    function resetAll() {
        resetWordInfo()
        resetGameContext()
    }


    function displayResult() {
        setDisplayAlert(true)
        setTimeout(() => setDisplayAlert(false), 2000)
    }

    return (

        <Container className="align-items-center" style={{ height: '100vh', textAlign: 'center' }} >
            <GameContext
                turn={turn}
                // seriesScore={seriesScore}
                playOneWins={playOneWins}
                playTwoWins={playTwoWins}
                indicator={indicator}
                playerOne={playerOne}
                playerTwo={playerTwo}
            >
            </GameContext>
            { gameOver ?
                <GameOver
                    winner={playOneWins > playTwoWins ? playerOne : playerTwo}

                    resetAll={resetAll}>

                </GameOver>
                :
                <>
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

                    <ChallengeModal
                        show={showModal}
                        setShow={setShowModal}
                        prevWord={prevWord}
                        playerChallenged={1 - turn ? playerTwo : playerOne} setChallengedWord={setChallengedWord}
                    >

                    </ChallengeModal>

                    <ResultModal
                        show={displayAlert}
                        isValid={prevChallengeSuccess}
                        word={challengedWord}
                        playerChallenged={1 - turn ? playerTwo : playerOne} ></ResultModal>
                </>
            }

        </Container >
    )
}