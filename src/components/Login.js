import React, { useRef } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import GameHeader from './GameHeader'

export default function Login({ onIdSubmit }) {

    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }



    return (
        <Container className="align-items-center" style={{ height: '100vh', textAlign: 'center' }}>
            <GameHeader></GameHeader>

            <Form onSubmit={handleSubmit} style={{ width: '200px', margin: 'auto' }}>
                <Form.Group>
                    <Form.Label>Enter Game ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2 btn-block btn-lg">Join Game</Button>
            </Form>

            <Button onClick={createNewId} style={{ width: '200px', marginTop: '50px' }} variant="secondary">Create New Game</Button>
        </Container>
    )
}
