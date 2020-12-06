import React, { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

    const [result, setResult] = useState("")

    var gameStart = Math.floor(Math.random() * 2)

    const [turn, setTurn] = useState(gameStart)
    const [definition, setDefinition] = useState("")
    const [prevWinner, setPrevWinner] = useState(0)


    const colors = ["firebrick", "steelblue"]

    const handleSubmit = useCallback(() => {
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
    }, [prevWord, currLetter, isAfter])

    const handleKeyDown = useCallback((event) => {
        const code = event.keyCode

        if (showModal || displayAlert || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey || event.repeat) {
            return
        }
        // backspace/delete
        else if (code === 8 || code === 46) {
            setIsAfter(null)
            setCurrLetter('');
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
                setIsAfter(true)
            }
        }
    }, [currLetter, prevWord, isAfter, displayAlert, showModal, handleSubmit])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
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


            const fetchWordDef = async () => {
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
        if (playOneWins === 3 || playTwoWins === 3) {

            setTimeout(
                () => {
                    setGameOver(true)
                }, 3000)
        }
    }, [playOneWins, playTwoWins]);


    async function handleChallenge() {
        if (prevWord.length > 3) {
            await axios.get(`/${prevWord}`).then(response => {
                if (response.data.definition) {
                    setResult("prevCorrect")
                    setDefinition(response.data.definition)
                    displayResult()

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

    function resetWordInfo() {
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

        <Container fluid className="align-items-center" style={{ textAlign: 'center' }} >
            <Row style={{ marginTop: "30px" }}>
                <Col><GameContext
                    turn={turn}
                    colors={colors}
                    playOneWins={playOneWins}
                    playTwoWins={playTwoWins}
                    playerOne={playerOne}
                    playerTwo={playerTwo}
                >
                </GameContext></Col>
            </Row>
            { gameOver ?
                <GameOver
                    winner={playOneWins > playTwoWins ? playerOne : playerTwo}
                    color={playOneWins > playTwoWins ? colors[0] : colors[1]}
                    resetAll={resetAll}>

                </GameOver>
                :
                <>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col>
                            <GameAction
                                handleSubmit={handleSubmit}
                                handleChallenge={handleChallenge}
                                currLetter={currLetter}
                                prevWord={prevWord}
                                isAfter={isAfter}
                                setIsAfter={setIsAfter}
                                statement={statement}
                                confirmDisabled={confirmDisabled}
                                setConfirmDisabled={setConfirmDisabled}
                                challengeDisabled={challengeDisabled}

                                turn={turn}
                                color={turn ? colors[1] : colors[0]}
                            >
                            </GameAction>
                        </Col>
                    </Row>

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
                        loser={prevWinner === 0 ? playerTwo : playerOne}
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