import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function UsernamePrompt({ user, setUser, setNumSubmitted }) {

    // console.log(setUser)
    function handleChange(e) {
        setUser(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setNumSubmitted(prev => prev + 1)

        // console.log(e.target)
        e.target.reset()
        // console.log(e.target)
        // setUser(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Form.Label column="lg">Player {user}, enter your name</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Name" onChange={handleChange}></Form.Control>
            <Button type="submit" size="lg" style={{ marginTop: "20px" }}>Submit</Button>
        </Form>
    )
}
