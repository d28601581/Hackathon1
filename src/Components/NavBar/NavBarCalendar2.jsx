import React, {useState} from 'react';
import {Navbar, Nav, Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import ColorChoice from '../ColorChoice';


 function NavBarCalendar2(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, onChange] = useState(new Date());

    
    return (
        <>
            <Navbar bg ="dark" variant ="dark">
                <Navbar.Brand href = "/">Home</Navbar.Brand>
                <Nav className = "mr-auto">
                    <Nav.Link href= "/Drafts">Drafts</Nav.Link>
                    <Nav.Link eventKey={2} onClick ={handleShow}>New Task</Nav.Link>
                </Nav> 
                
            </Navbar>
            <Modal show ={show} onHide ={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup size="lg" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Title:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl/>
                    </InputGroup>
               
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Location:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl/>
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Start Date:</InputGroup.Text>
                        </InputGroup.Prepend> 
                        <DateTimePicker onChange={onChange} value={value}/>                       
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text bg="outline-danger">End Date:</InputGroup.Text>
                        </InputGroup.Prepend> 
                        <DateTimePicker onChange={onChange} value={value}/>                       
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Notes:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    
                    <ColorChoice/>

                        
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
    
}
export default NavBarCalendar2;
