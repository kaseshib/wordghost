import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function UsernamePrompt({ user, setUser, setNumSubmitted }) {

    const [nameError, setNameError] = useState("")
    const [nameLength, setNameLength] = useState(0)
    // console.log(setUser)
    function handleChange(e) {
        setUser(e.target.value)
        setNameLength(e.target.value.length)
    }
    function handleSubmit(e) {
        e.preventDefault()

        if (nameLength > 1) {
            setNumSubmitted(prev => prev + 1)
            e.target.reset()
            setNameError("")
            setNameLength(0)
        } else {
            setNameError("Name must be two characters or longer")
        }
    }

    return (
        <Form noValidate onSubmit={handleSubmit} style={{ width: "300px", margin: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Form.Label column="lg">Player {user}, enter your name</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Name" onChange={handleChange}></Form.Control>
            <div style={{ fontSize: 12, color: "red" }}>{nameError}</div>
            <Button type="submit" size="lg" style={{ marginTop: "20px" }}>Submit</Button>
        </Form>
    )
}
