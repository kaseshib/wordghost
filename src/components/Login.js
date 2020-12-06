import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
// import { v4 as uuidV4 } from 'uuid'
import GameHeader from './GameHeader'
import UsernamePrompt from './UsernamePrompt'
import InstructionBox from './InstructionBox'
import Footer from './Footer'

export default function Login({ setUserOne, setUserTwo, numSubmitted, setNumSubmitted }) {

    const [showInstructions, setShowInstructions] = useState(false)
    const handleCloseInstructions = () => setShowInstructions(false);
    const handleShowInstructions = () => setShowInstructions(true);

    // const idRef = useRef()

    // function handleSubmit(e) {
    //     e.preventDefault()

    //     // onIdSubmit(idRef.current.value)
    // }

    function handleClick() {
        setNumSubmitted(prev => prev + 1)
    }

    return (
        <Container className="align-items-center mb-4" style={{ height: '100vh', textAlign: 'center', display: "flow-root" }}>
            <Row className="mb-4" style={{ marginTop: "10vh" }}>
                <Col>
                    <GameHeader font="max(70px, 10vw)"></GameHeader>
                </Col>
            </Row>

            {/* <Form onSubmit={handleSubmit} style={{ width: '200px', margin: 'auto' }}>
                <Form.Group>
                    <Form.Label>Enter Game ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2 btn-block btn-lg">Join Game</Button>
    </Form> */}

            {numSubmitted === 0 ?
                <><Row className="mb-4">
                    <Col>
                        <Button onClick={handleClick} size="lg" style={{ width: "300px", height: "70px", fontSize: "30px", marginTop: "10vh" }} variant="primary">Start New Game</Button>
                    </Col>
                </Row>

                    <Row className="mb-4">
                        <Col>
                            <Button onClick={handleShowInstructions} style={{ width: "200px", height: "50px", fontSize: "21px" }} variant="secondary">Instructions</Button>
                        </Col>
                    </Row>

                    <InstructionBox
                        show={showInstructions}
                        handleClose={handleCloseInstructions}
                    ></InstructionBox>
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

            <Footer></Footer>
        </Container >
    )
}
