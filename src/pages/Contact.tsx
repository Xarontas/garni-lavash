import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

export default function Contact() {
    const { t, i18n } = useTranslation();
    return (
        <>

            <div className="heroDiv" style={{ backgroundImage: "url(./desk1.jpg)" }}>
                <TopNavbar />
            </div>
            <Container className="con-pad">

                <Row>
                    <Col md={6}>
                        <h2 className="formTitleMobile">{t('contact.title')}</h2>
                        <div className="contactPhotoDiv">
                            <img src="./contact-image.jpg" alt="form photo" className="contactPhoto" />
                        </div>
                        <div className="contactInfo">
                            <div className="contactFirm mt-3">Garni Lavash Bakery</div>
                            <div className="contactTel pt-2"><i className="bi bi-telephone-fill"></i> <a href="tel:2310629496">2310.629496</a> / <a href="tel:00306979671345">6979671345</a></div>
                            <div className="contactAddress pt-2"><i className="bi bi-geo-alt-fill"></i> {t('contact.address')}</div>
                            <div className="contactMail pt-2"><i className="bi bi-envelope-fill"></i> <a href="mailto:giannis_s10@hotmail.com">giannis_s10@hotmail.com</a> </div>
                        </div>

                    </Col>
                    <Col md={6}>
                        <form method="post" action="contact2.asp">
                            <h2 className="formTitle">{t('contact.title')}</h2>

                            <div className="form-floating mb-3">
                                <input type="text" id="name" name="name" className="form-control" placeholder={t('contact.name')} required />
                                <Form.Label htmlFor="name">{t('contact.name')} *</Form.Label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" id="mail" name="mail" className="form-control" placeholder={t('contact.email')} />
                                <Form.Label htmlFor="mail">{t('contact.email')}</Form.Label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" id="phone" name="phone" className="form-control" placeholder={t('contact.tel')} required />
                                <Form.Label htmlFor="phone">{t('contact.tel')} *</Form.Label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder={t('contact.message')} id="message" name="message" style={{ height: "150px" }}></textarea>
                                <Form.Label htmlFor="message">{t('contact.message')}</Form.Label>
                            </div>
                            <Button variant="danger" type="submit">
                                {t('contact.submit')}
                            </Button>
                        </form>

                    </Col>
                </Row>
            </Container>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.7721219294617!2d22.930845142991224!3d40.654647109474965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839bfe7a6f295%3A0xa8d6a7f8418938f6!2sPapadopoulou%2015%2C%20Ampelokipi%20561%2023!5e0!3m2!1sen!2sgr!4v1702972684049!5m2!1sen!2sgr" width="100%" height="400" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Footer />
        </>
    )
}
