import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import GameContext from './GameContext'
import GameAction from './GameAction'
import GameOver from './GameOver'
import ChallengeModal from './ChallengeModal'
import ResultModal from './ResultModal'
import axios from "axios";



export default function Game({ playerOne, playerTwo }) {
    const [playOneWins, setPlayOneWins] = useState(0)
    const [playTwoWins, setPlayTwoWins] = useState(0)

    const [currLetter, setCurrLetter] = useState('')
    const [prevWord, setWord] = useState('')
    const [isAfter, setIsAfter] = useState(true)
    const [statement, setStatement] = useState("Type in a letter")
    const [confirmDisabled, setConfirmDisabled] = useState(true)
    const [challengeDisabled, setChallengeDisabled] = useState(true)
    const [gameOver, setGameOver] = useState(false)

    const [challengedWord, setChallengedWord] = useState(null)

    const [showModal, setShowModal] = useState(false)
    const [displayAlert, setDisplayAlert] = useState(false)

    const [prevChallengeSuccess, setPrevChallengeSuccess] = useState(false)

    const [result, setResult] = useState("")

    var gameStart = Math.floor(Math.random() * 2)

    const [turn, setTurn] = useState(gameStart)
    const [definition, setDefinition] = useState("")
    const [prevWinner, setPrevWinner] = useState(0)


    const colors = ["firebrick", "steelblue"]

    const handleKeyDown = (event) => {
        const code = event.keyCode

        if (showModal || displayAlert || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey || event.repeat) {
            return
        }
        // backspace/delete
        else if (code === 8 || code === 46) {
            setIsAfter(null)
            setCurrLetter('');
            // console.log("delete")
            setStatement("Type in a letter")
            setConfirmDisabled(true)
            if (prevWord) {
                setChallengeDisabled(false)
            }
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
            console.log("submit attempt")
            handleSubmit(event)
            //letter
        } else if (code >= 65 && code <= 90) {
            // console.log("in here")
            console.log("isafter", isAfter)
            console.log("prevword:", prevWord)
            console.log("!prevword:", !prevWord)

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
                setIsAfter(true)
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
        if (showModal === false) {
            if (challengedWord === null) {
                return
            }

            let winner

            let def = ''

            console.log("before", def)

            const fetchWordDef = async () => {
                setPrevChallengeSuccess(false)
                setPrevWinner(turn)
                if (challengedWord === "#") {
                    setResult("bluff")
                    setDefinition("")
                } else if (challengedWord.length < 4) {
                    setResult("short")
                    setDefinition("")

                } else if (!challengedWord.includes(prevWord)) {
                    setResult("notContained")
                    setDefinition("")

                } else if (challengedWord.split(" ").length > 1) {
                    setResult("invalid")
                    setDefinition("")

                } else {
                    await axios.get(`/${challengedWord}`).then(response => {
                        def = response.data.definition
                    })
                    setDefinition(def)

                    if (def) {
                        setPrevChallengeSuccess(true)
                        setResult("valid")
                        winner = 1 - turn
                        setPrevWinner(1 - turn)
                    } else {
                        winner = turn
                        setResult("invalid")
                    }
                }

                if (winner === 0) {
                    setPlayOneWins(playOneWins => playOneWins + 1)
                } else {
                    setPlayTwoWins(playTwoWins => playTwoWins + 1)
                }

                displayResult()

                setTimeout(() => resetWordInfo(), 3000)

            }

            fetchWordDef()
        }

    }, [showModal]);

    useEffect(() => {
        if (playOneWins === 3 || playTwoWins == 3) {

            setTimeout(
                () => {
                    setGameOver(true)
                }, 3000)
        }
    }, [playOneWins, playTwoWins]);

    function handleSubmit() {
        let updated = prevWord

        if (isAfter) {
            updated += currLetter;
        } else if (isAfter === false) {
            updated = currLetter + updated;
        } else if (!prevWord) {
            updated = currLetter
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

    async function handleChallenge() {
        if (prevWord.length > 3) {
            await axios.get(`/${prevWord}`).then(response => {
                if (response.data.definition) {
                    setPrevChallengeSuccess(true)
                    setResult("prevCorrect")
                    setDefinition(response.data.definition)
                    displayResult()
                    console.log("----- was word ------")

                    if (turn === 0) {
                        setPlayOneWins(playOneWins => playOneWins + 1)
                    } else {
                        setPlayTwoWins(playTwoWins => playTwoWins + 1)
                    }



                    setTimeout(() => resetWordInfo(), 3000)
                } else {
                    setShowModal(true)
                    setChallengedWord("")
                }
            })
        } else {
            setShowModal(true)
            setChallengedWord("")
        }
    }

    async function getWordDef(word) {
        await axios.get(`/${word}`).then(response => {
            console.log("def:", response.data.definition)
            return response.data.definition
        })
    }


    function checkValidWord(intended) {
        // call to backend here in the future

        if (intended.length < 4 || !(intended.includes(prevWord)) || intended.split(" ").length >= 2) {
            return false
        }
        console.log("past first check")

        axios.get(`/${intended}`).then(response => {
            console.log(response.data.definition)
            if (response.data.definition) {
                console.log("has def")
                return true

            } else {
                console.log("does not have def")
                return false
            }

        })
    }



    function resetWordInfo() {
        console.log("------ reset word info ------")
        setCurrLetter('')

        setIsAfter(true)
        setStatement("Type in a letter")
        setConfirmDisabled(true)
        setChallengeDisabled(true)
        setWord('')

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
        const timer = setTimeout(
            () => {
                setDisplayAlert(false)
            }, 3000)
        return () => clearTimeout(timer)

    }

    return (

        <Container className="align-items-center" style={{ height: '100vh', textAlign: 'center' }} >
            <GameContext
                turn={turn}
                colors={colors}
                playOneWins={playOneWins}
                playTwoWins={playTwoWins}
                playerOne={playerOne}
                playerTwo={playerTwo}
            >
            </GameContext>
            { gameOver ?
                <GameOver
                    winner={playOneWins > playTwoWins ? playerOne : playerTwo}
                    color={playOneWins > playTwoWins ? colors[0] : colors[1]}
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
                        setIsAfter={setIsAfter}
                        statement={statement}
                        confirmDisabled={confirmDisabled}
                        challengeDisabled={challengeDisabled}
                        turn={turn}
                        color={turn ? colors[1] : colors[0]}
                    ></GameAction>

                    <ChallengeModal
                        show={showModal}
                        setShow={setShowModal}
                        prevWord={prevWord}
                        playerChallenged={1 - turn ? playerTwo : playerOne} setChallengedWord={setChallengedWord}
                        colors={colors}
                    >

                    </ChallengeModal>

                    <ResultModal
                        show={displayAlert}
                        winner={prevWinner === 0 ? playerOne : playerTwo}
                        loser={prevWinner == 0 ? playerTwo : playerOne}
                        guess={challengedWord}
                        prevWord={prevWord}
                        definition={definition}
                        result={result}
                        colors={colors}>

                    </ResultModal>
                </>
            }

        </Container >
    )
}