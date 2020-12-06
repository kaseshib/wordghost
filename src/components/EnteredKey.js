import React from 'react'
import { Form } from 'react-bootstrap'

export default function EnteredKey(props) {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = () => {
        //prevent error message
    }

    return (

        <div style={{ border: 'darkslategray solid', margin: '0px 20px' }}>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Control maxLength="1" value={props.letter} style={{ width: "110px", height: "110px", margin: "auto", fontSize: "80px", textAlign: "center" }}>

                </Form.Control>

            </Form>

        </div>





    )
}
