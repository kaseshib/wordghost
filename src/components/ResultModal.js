import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


export default function ResultModal({ show, isValid, word, playerChallenged }) {

    const color = isValid ? "green" : "red"
    return (
        <div>
            <Modal show={show} style={{ color: { color } }}>


                <Modal.Body>

                    <b>{playerChallenged}</b>
                    won that game with {word}!")

                </Modal.Body>
            </Modal>
        </div>
    )
}
