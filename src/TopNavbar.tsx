import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function TopNavbar() {

    const [lang, setLang] = useState("Greek");
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar-dark shadow-5-strong pad">
                <Container>
                    <Navbar.Brand href="#home"><img src='./garni-logo.png' alt="logo" width={'100%'} height={'60px'} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link eventKey={1} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/About">About Us</Nav.Link>
                            <Nav.Link eventKey={3} as={Link} to="/Products">Products</Nav.Link>
                            <Nav.Link eventKey={4} as={Link} to="/Contact">Contact</Nav.Link>

                            <Dropdown as={ButtonGroup}>
                                <Button variant="outline-light" className='langButton'><img src="globe.svg" alt="globe" width={'15px'} height={'15px'} /> {lang}</Button>

                                <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" onClick={() => setLang("Greek")}>Greek</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={() => setLang("English")}>English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={() => setLang("Pусский")}>Pусский</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
