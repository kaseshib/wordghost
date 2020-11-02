import React, { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'



export default function Game() {
    const [currLetter, setCurrLetter] = useState('')
    const [prevWord, setWord] = useState('')
    const [isAfter, setIsAfter] = useState(true)
    const [status, setStatus] = useState("Press left or right arrow key to specify a placement")
    const [preletter, setPre] = useState('')
    const [postletter, setPost] = useState('')

    // console.log("curr:", currLetter, "word:", prevWord, "after?", isAfter)




    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit attempt")
        let updated = prevWord

        if (isAfter) {
            updated += currLetter;
        } else if (isAfter === false) {
            updated = currLetter + updated;
        };

        setCurrLetter('')
        setWord(updated)
        setIsAfter(null)
        setStatus("Press left or right arrow key to specify a placement")
        setPre('')
        setPost('')
    }

    // function handleOutputString(string) {
    //     this.setState({ prev: string })
    // }

    function onKeyPressed(e) {
        // e.preventDefault()
        // console.log(e.key);
        if (e.keyCode === 39) {
            setIsAfter(true)
            setStatus("Appending letter...")
            setPre('')
            setPost(currLetter)
        } else if (e.keyCode === 37) {
            setIsAfter(false)
            setStatus("Prepending letter...")
            setPost('')
            setPre(currLetter)
        }
    }

    function inputChange(e) {
        let input = e.target.value
        setCurrLetter(input)

        if (isAfter) {
            setPost(input);
            setPre('');
        } else if (isAfter === false) {
            setPre(input);
            setPost('');
        } else {
            setPre('')
            setPost('')
        };

    }


    return (

        <Container className="align-items-center d-flex" style={{ height: '100vh' }} onKeyDown={(e) => onKeyPressed(e)} >
            <Form onSubmit={handleSubmit} style={{ margin: 'auto', width: '100vw' }}>
                <Form.Group>
                    <Form.Label>Letter:</Form.Label>
                    <Form.Control type="text" value={currLetter}
                        onChange={inputChange}
                        maxLength="1"
                        autoFocus="true"
                        style={{ height: '150px', width: '150px' }} />

                    <br></br>

                    <Form.Control type="submit" value="Submit" />
                </Form.Group>

                <h1>
                    <span style={{ color: 'red' }}>{preletter}</span>
                    {prevWord}
                    <span style={{ color: 'red' }}>{postletter}</span></h1>
                <h2>{status}</h2>
            </Form>

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
