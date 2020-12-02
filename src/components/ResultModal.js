import React, { useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


export default function ResultModal({ show, winner, loser, guess, prevWord, definition, result }) {

    // const color = isValid ? "mediumseagreen" : "indianred"

    // const prev

    let statement = ""

    console.log("guess:", guess)
    console.log("prevword:", prevWord)


    /// result is either "prevCorrect", "bluff", "notContained", "invalid", "valid"
    switch (result) {
        case "prevCorrect":
            statement = `"${prevWord}" is indeed a word.`
            // console.log("prevcorr")
            break

        case "bluff":
            statement = `${loser} was bluffing!`
            // console.log("bluff")
            break

        case "notContained":
            statement = `"${guess}" does not contain "${prevWord}".`
            // console.log("notcon")
            break


        case "invalid":
            statement = `"${guess}" is invalid.`
            // console.log("invalid")
            break


        case "short":
            statement = `"${guess}" is shorter than 4 characters.`
            // console.log("short")
            break


        case "valid":
            statement = `"${guess}"`
            // console.log("valid")
            break

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
