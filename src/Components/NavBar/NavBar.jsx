import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavBar extends Component{
    render(){
        return (
            <>
                <Navbar bg ="dark" variant ="dark">
                    <Navbar.Brand href = "#home">Home</Navbar.Brand>
                    <Nav className = "mr-auto">
                        <Nav.Link href= "/Dashboard">Dashboard</Nav.Link>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Username" className="mr-sm-2"/>
                        <FormControl type="text" placeholder="Password" className="mr-sm-2"/>
                        <Button variant="outline-info">Sign In</Button>
                    </Form>

                </Navbar>
            </>
        )
    }
}

export default NavBar;