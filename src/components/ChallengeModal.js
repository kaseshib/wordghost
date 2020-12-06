import React from 'react'

import { Modal, Button, Form } from 'react-bootstrap';


export default function ChallengeModal({ show, setShow, prevWord, playerChallenged, setChallengedWord }) {

    const handleClose = () => {
        setShow(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
    }

    const handleConcede = (e) => {
        setChallengedWord("#")
        handleSubmit(e)
    }

    function handleChange(event) {
        let val = event.target.value.toLowerCase()
        setChallengedWord(val)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Challenge!</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <b>{playerChallenged}</b>
                    , what word were you thinking of? (must include "{prevWord}")
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>

                            <Form.Control
                                placeholder="Enter word"
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Your word must be at least 4 characters long
                            </Form.Text>
                        </Form.Group>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                    <Button variant="outline-danger" onClick={handleConcede}>
                        Concede Word
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
