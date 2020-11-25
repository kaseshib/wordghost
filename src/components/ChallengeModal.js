import React, { useState } from 'react'

import { Modal, Button, Form } from 'react-bootstrap';


export default function ChallengeModal({ show, setShow, prevWord, playerChallenged, setChallengedWord }) {

    // const [enteredWord, setEnteredWord] = useState("")

    const handleClose = () => {
        setShow(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
    }



    function handleChange(event) {
        let val = event.target.value
        // setEnteredWord(val)
        setChallengedWord(val)
    }



    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
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
                        Enter
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );










    return (

        <div>

        </div>
    )
}
