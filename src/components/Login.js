import React, { useRef, useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import GameHeader from './GameHeader'
import UsernamePrompt from './UsernamePrompt'

export default function Login({ setUserOne, setUserTwo, numSubmitted, setNumSubmitted }) {

    const [showInstructions, setShowInstructions] = useState(false)
    const handleCloseInstructions = () => setShowInstructions(false);
    const handleShowInstructions = () => setShowInstructions(true);

    // const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        // onIdSubmit(idRef.current.value)
    }

    function handleClick() {
        setNumSubmitted(prev => prev + 1)
    }

    return (
        <Container className="align-items-center" style={{ height: '100vh', textAlign: 'center' }}>
            <GameHeader></GameHeader>

            {/* <Form onSubmit={handleSubmit} style={{ width: '200px', margin: 'auto' }}>
                <Form.Group>
                    <Form.Label>Enter Game ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2 btn-block btn-lg">Join Game</Button>
    </Form> */}

            {numSubmitted === 0 ?
                <><Button onClick={handleClick} size="lg" style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)" }} variant="primary">Start New Game</Button>

                    <Button onClick={handleShowInstructions} style={{ position: "absolute", top: "70%", transform: "translate(-50%, -50%)" }} variant="secondary">Instructions</Button>

                    <Modal
                        show={showInstructions}
                        aria-labelledby="contained-modal-title-vcenter"
                        onHide={handleCloseInstructions}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                How to play WordGhost
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Objective</h4>
                            <br></br>
                            <ul>
                                <li>Players take turns adding letters to a growing word fragment, trying not to be the one to complete a real word.
                                    </li>
                                <li>Players may add a letter to either the front or back of the previous fragment.
                                </li>
                                <li>To win the round, you must either: challenge a completed word, OR challenge your opponent and have them unable to complete their word, OR get challenged by your opponent and successfully type a word that contains the fragment.
                                    </li>
                                <li>
                                    First to win three rounds wins the match.
                                    </li>
                            </ul>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseInstructions}>Close</Button>
                        </Modal.Footer>


                    </Modal>
                </>


                : numSubmitted === 1
                    ? <UsernamePrompt
                        user={1}
                        setUser={setUserOne}
                        setNumSubmitted={setNumSubmitted}
                    >
                    </UsernamePrompt>
                    : <UsernamePrompt
                        user={2}
                        setUser={setUserTwo}
                        setNumSubmitted={setNumSubmitted}

                    >
                    </UsernamePrompt>
            }

        </Container >
    )
}
