import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

export default function About() {
    const { t } = useTranslation();
    return (
        <>
            <div className="heroDiv">
                <TopNavbar />
            </div>
            <div className="aboutDiv">
                <Container>
                    <div className='aboutTitle'>{t('about.title')}</div>
                    <Row>
                        <Col sm={12} col={12}>
                            <div className="aboutText">{t('about.txt')} </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="aboutBg">
                <div className="aboutSection2">
                    <Container>
                        <Row className="aboutSection2Bg">
                            <Col sm={12} col={12}>
                                <h2 className="aboutSection2Title">
                                    {t('about.title2')}</h2>
                                <p className="aboutSection2Text p-4">{t('about.txt2')}.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}