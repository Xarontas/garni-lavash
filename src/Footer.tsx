import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="footerWrapper bg-black">
                <Container >
                    <div className="footerDiv">
                        <div className="leftDiv">
                            <div className='footerLogo'><img src='../garni-logo.png' height={'60px'} width={'80px'} alt='footer logo' /></div>
                            <div className='footerLinks'>
                                <Nav>
                                    <Nav.Link eventKey={1} as={Link} to="/">{t('menu.home')}</Nav.Link>
                                    <Nav.Link eventKey={2} as={Link} to="/About">{t('menu.about')}</Nav.Link>
                                    <Nav.Link eventKey={3} as={Link} to="/Products">{t('menu.products')}</Nav.Link>
                                    <Nav.Link eventKey={4} as={Link} to="/Contact">{t('menu.contact')}</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                        <div className="rightDiv">
                            <div className='social'>
                                <Nav>
                                    <Nav.Link href="www.facebook.com" target='_blank'><img src="./icon-facebook.svg" alt='facebook' /> </Nav.Link>
                                    <Nav.Link href="www.pinterest.com" target='_blank'><img src="./icon-pinterest.svg" alt='pinterest' /> </Nav.Link>
                                    <Nav.Link href="www.instagram.com" target='_blank'><img src="./icon-instagram.svg" alt='instagram' /> </Nav.Link>

                                </Nav>
                            </div>
                            <div className='copyright'>&copy; 2023 by Garni Bakey</div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
