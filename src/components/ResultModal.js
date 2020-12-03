import React from 'react'
import { Modal } from 'react-bootstrap';


export default function ResultModal({ show, winner, loser, guess, prevWord, definition, result }) {

    let statement = ""

    /// result is either "prevCorrect", "bluff", "notContained", "invalid", "valid"
    switch (result) {
        case "prevCorrect":
            statement = `"${prevWord}" is indeed a word.`
            break

        case "bluff":
            statement = `${loser} was bluffing!`
            break

        case "notContained":
            statement = `"${guess}" does not contain "${prevWord}".`
            break

        case "invalid":
            statement = `"${guess}" is invalid.`
            break

        case "short":
            statement = `"${guess}" is shorter than 4 characters.`
            break

        case "valid":
            statement = `"${guess}"`
            break

        default:
            statement = `Hmm, there's been an error`

    }


    return (
        <div>
            <Modal
                show={show}
                centered
            >

                <Modal.Body
                >
                    <h2>
                        <b>{winner} </b>
                         wins the challenge!
                    </h2>

                    <h3>{statement}</h3>

                    <h6>{definition}</h6>


                </Modal.Body>
            </Modal>
        </div >
    )
}
