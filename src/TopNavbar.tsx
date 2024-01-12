import { useTranslation } from 'react-i18next';
// import { Suspense } from 'react';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function TopNavbar() {

    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('Ελληνικά');

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        if (lng === 'ru') {
            setLang('Pусский')
        }
        else if (lng === 'en') {
            setLang('English')
        }
        else { setLang('Ελληνικά') }
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar-dark shadow-5-strong pad">
                <Container>
                    <Navbar.Brand href="#home"><img src='./garni-logo.png' alt="logo" width={'100%'} height={'60px'} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link eventKey={1} as={Link} to="/">{t('menu.home')}</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/About">{t('menu.about')}</Nav.Link>
                            <Nav.Link eventKey={3} as={Link} to="/Products">{t('menu.products')}</Nav.Link>
                            <Nav.Link eventKey={4} as={Link} to="/Contact">{t('menu.contact')}</Nav.Link>

                            <Dropdown as={ButtonGroup}>
                                <Button variant="outline-light" className='langButton'><img src="globe.svg" alt="globe" width={'15px'} height={'15px'} /> {lang}</Button>

                                <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/gr" onClick={() => changeLanguage('gr')}>Greek</Dropdown.Item>
                                    <Dropdown.Item href="#/en" onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                                    <Dropdown.Item href="#/ru" onClick={() => changeLanguage('ru')}>Pусский</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
