import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'



export default function Game() {
    const [currLetter, setCurrLetter] = useState('')
    const [prevWord, setWord] = useState('')
    const [currAddition, setCurrAddition] = useState({ isAfter: true, preletter: '', postletter: '' })

    const { isAfter, preletter, postletter } = currAddition
    const statement = "Type a letter"


    const handleKeyDown = (event) => {
        const code = event.keyCode

        // backspace/delete
        if (code === 8 || code === 46) {
            setCurrAddition({ isAfter: null, preletter: '', postletter: '' })
            setCurrLetter('');
            console.log("delete")

            // left 
        } else if (code === 37) {
            setCurrAddition({ isAfter: false, preletter: currLetter, postletter: '' })

            // right
        } else if (code === 39) {

            setCurrAddition({ isAfter: true, preletter: '', postletter: currLetter })

            //submit
        } else if (code === 13) {
            handleSubmit(event)

            //letter
        } else if (code >= 65 && code <= 90) {
            setCurrLetter(event.key)

            if (isAfter) {
                setCurrAddition({ ...currAddition, preletter: '', postletter: event.key })
            } else if (isAfter === false) {
                setCurrAddition({ ...currAddition, preletter: event.key, postletter: '' })
            } else {
                setCurrAddition({ ...currAddition, preletter: '', postletter: '' })
            };
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);




    function handleSubmit(e) {
        console.log("submit attempt")
        let updated = prevWord

        if (isAfter) {
            updated += currLetter;
            console.log("in here")
        } else if (isAfter === false) {
            updated = currLetter + updated;
            console.log("sike")
        };

        setCurrAddition({ isAfter: null, preletter: '', postletter: '' })
        setCurrLetter('')
        setWord(updated)
    }

    return (

        <Container className="align-items-center" style={{ height: '100vh', textAlign: 'center' }} >
            <Row>
                <Col>
                    <p className="col-md-12" style={{ fontSize: '80px' }}>
                        <span style={{ color: 'red' }}>{preletter}</span>
                        <span>{prevWord}</span>
                        <span style={{ color: 'red' }}>{postletter}</span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>{statement}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={{ fontSize: '80px' }}>{currLetter}</p>
                </Col>
            </Row>
            {/* <div className="col-md-12">{currLetter}</div> */}
        </Container >
    )
}









// export default class Game extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             value: '',
//             prev: '',
//             isAfter: null
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleOutputString = this.handleOutputString.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         console.log("submit attempt")
//         event.preventDefault();
//         let newLetter = this.state.value;
//         let updated = this.state.prev;

//         if (this.state.isAfter) {
//             updated += newLetter;
//         } else if (this.state.isAfter == false) {
//             updated = newLetter + updated;
//         };

//         this.setState({ value: '', prev: updated, isAfter: null });
//     }

//     handleOutputString(string) {
//         this.setState({ prev: string })
//     }

//     onKeyPressed(e) {
//         console.log(e.key);
//         if (e.keyCode == '39') {
//             this.setState({ isAfter: true })
//         } else if (e.keyCode == '37') {
//             this.setState({ isAfter: false })
//         }
//     }

//     useEffect() {
//         function handleKeyDown(e) {
//             console.log(e.target);
//             console.log(e.keyCode);
//         }

//         document.addEventListener("keydown", handleKeyDown);

//         return function cleanup() {
//             document.removeEventListener("keydown", handleKeyDown);
//         }
//     }

//     render() {
//         let status;
//         if (this.state.isAfter) {
//             status = "Appending letter..."
//         } else if (this.state.isAfter == false) {
//             status = "Prepending letter..."
//         } else {
//             status = "Press left or right arrow key to specify a placement"
//         }


//         return (

//             <Container className="align-items-center d-flex" style={{ height: '100vh' }} onKeyDown={(e) => this.onKeyPressed(e)}>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group>
//                         <Form.Label>Letter:</Form.Label>
//                         <Form.Control type="text" htmlSize="10" value={this.state.value} onChange={this.handleChange} maxLength="1" />
//                         <br></br>
//                         <Form.Control type="submit" value="Submit" />
//                         <h1>{this.state.prev}</h1>
//                         <h2>{status}</h2>
//                     </Form.Group>
//                 </Form>
//             </Container>
//         );
//     }
// }











// export default function Game({ id }) {
//     word: '';

//     function handleSubmit(event) {
//         event.preventDefault()
//         word += event.target.value;
//     }

//     return (
//         <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Enter Letter</Form.Label>
//                     <Form.Control type="text" ref={idRef} required />
//                 </Form.Group>
//                 <Button type="submit" className="mr-2">Submit</Button>
//             </Form>
//         </Container>



//     )
// }
