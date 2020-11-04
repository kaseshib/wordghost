import React, { useState, useEffect } from 'react'
import WordInfo from './WordInfo'
import { Button } from 'react-bootstrap'

export default function GameAction(props) {
    const [currLetter, setCurrLetter] = useState('')
    const [prevWord, setWord] = useState('')
    const [isAfter, setIsAfter] = useState(true)
    const [statement, setStatement] = useState("Type in a letter")

    const handleKeyDown = (event) => {
        const code = event.keyCode

        if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey || event.repeat) {
            return
        }
        // backspace/delete
        else if (code === 8 || code === 46) {
            setIsAfter(null)
            setCurrLetter('');
            console.log("delete")
            // left 
        } else if (code === 37) {
            setIsAfter(false)
            // right
        } else if (code === 39) {
            setIsAfter(true)
            //submit
        } else if (code === 13) {
            handleSubmit(event)
            //letter
        } else if (code >= 65 && code <= 90) {
            setCurrLetter(event.key)
            console.log("pressed", event.key)
            if (prevWord) {
                setStatement("Press left or right arrow key and press enter to confirm")
            } else {
                setStatement("Press enter to confirm")
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    function handleSubmit() {
        console.log("submit attempt")
        let updated = prevWord

        if (isAfter) {
            updated += currLetter;
            console.log("in here")
        } else if (isAfter === false) {
            updated = currLetter + updated;
            console.log("sike")
        } else {
            return;
        };

        setIsAfter(null)
        setCurrLetter('')
        setWord(updated)
        setStatement("Type in a letter")
    }

    function handleChallenge() {
        console.log("challenge attempt")
    }




    return (
        <div>
            <WordInfo isAfter={isAfter} letter={currLetter} word={prevWord} statement={statement}></WordInfo>

            <Button className="btn btn-primary btn-large" onClick={handleSubmit} style={{ margin: '10px' }}>Confirm</Button>

            <Button className="btn btn-primary btn-large" onClick={handleChallenge} style={{ margin: '10px' }}>Challenge</Button>
        </div>
    )
}
