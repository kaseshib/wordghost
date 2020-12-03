import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function InstructionBox({ show, handleClose }) {
    return (
        <Modal
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    How to play WordGhost (2 players)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>Players take turns adding letters to a growing word fragment, trying not to be the one to complete a real word.
                        </li>
                    <li>Players may add a letter to either the front or back of the previous fragment.
                    </li>
                    <li>To win the round, you must either: challenge a completed word OR challenge your opponent and have them unable to think of a word that contains the fragment OR get challenged by your opponent and successfully type in a word that contains the fragment.
                        </li>
                    <li>
                        First person to win three rounds wins the match.
                        </li>
                </ul>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>


        </Modal>
    )
}
