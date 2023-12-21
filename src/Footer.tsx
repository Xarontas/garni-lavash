import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
export default function Footer() {
    return (
        <>
            <div className="footerWrapper bg-black">
                <Container >
                    <div className="footerDiv">
                        <div className="leftDiv">
                            <div className='footerLogo'><img src='../garni-logo.png' height={'60px'} width={'80px'} alt='footer logo' /></div>
                            <div className='footerLinks'>
                                <Nav>
                                    <Nav.Link href="#" eventKey={1}>Home</Nav.Link>
                                    <Nav.Link href="#About" eventKey={2}>About Us</Nav.Link>
                                    <Nav.Link href="#Products" eventKey={3}>Products</Nav.Link>
                                    <Nav.Link href="#Contact" eventKey={4}>Contact</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                        <div className="rightDiv">
                            <div className='social'>
                                <Nav>
                                    <Nav.Link href="www.facebook.com" target='_blank'><img src="/public/icon-facebook.svg" alt='facebook' /> </Nav.Link>
                                    <Nav.Link href="www.pinterest.com" target='_blank'><img src="/public/icon-pinterest.svg" alt='pinterest' /> </Nav.Link>
                                    <Nav.Link href="www.instagram.com" target='_blank'><img src="/public/icon-instagram.svg" alt='instagram' /> </Nav.Link>

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