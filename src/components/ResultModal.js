import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


export default function ResultModal({ show, isValid, word, playerChallenged }) {

    const color = isValid ? "mediumseagreen" : "indianred"

    let statement = ""

    if (word === "#" || word === "") {
        statement = " was bluffing that round!"
    } else if (isValid) {
        statement = "won that game with \"" + word + "\"!"
    } else {
        statement = "lost that game with \"" + word + "\"!"
    }

    return (
        <div>
            <Modal
                show={show}
                centered
            >


                <Modal.Body
                    style={{
                        color: color,
                        outline: 0,
                        textAlign: "center"
                    }}
                >
                    <b>{playerChallenged} </b>
                    {statement}


                </Modal.Body>
            </Modal>
        </div >
    )
}
