import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

function ProductModal1(props: any) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalPhoto" style={{ backgroundImage: 'url(./contact-image.jpg)' }}></div>
                <div className="modalInfo">
                    <h5>Lavash 1</h5>
                    <div className="weight">
                        <p className="modalTitle">Weight:</p>
                        <p className="modalText">0,27kg </p>
                    </div>
                    <div className="ingredients">
                        <p className="modalTitle">Ingredients:</p>
                        <p className="modalText">heat flour type 550, water, wheat flour type 850</p>
                    </div>
                    <div className="nutrition">
                        <p className="modalTitle">Nutrition Facts (100gr):</p>
                        <ul>
                            <li>kcal: 285</li>
                            <li>Protein: 8,6 g</li>
                            <li>Carbohydrate: 63,5 g</li>
                            <li>Fat: 1,4 g</li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
function ProductModal2(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalPhoto" style={{ backgroundImage: 'url(./prod3.jpg)' }}></div>
                <div className="modalInfo">
                    <h5>Ποντιακή Πίτα</h5>
                    <div className="weight">
                        <p className="modalTitle">Weight:</p>
                        <p className="modalText">0,300kg </p>
                    </div>
                    <div className="ingredients">
                        <p className="modalTitle">Ingredients:</p>
                        <p className="modalText">heat flour type 550, water, wheat flour type 850</p>
                    </div>
                    <div className="nutrition">
                        <p className="modalTitle">Nutrition Facts (100gr):</p>
                        <ul>
                            <li>kcal: 315</li>
                            <li>Protein: 4,7 g</li>
                            <li>Carbohydrate: 73,5 g</li>
                            <li>Fat: 2,3 g</li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
function ProductModal3(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalPhoto" style={{ backgroundImage: 'url(./contact-image.jpg)' }}></div>
                <div className="modalInfo">
                    <h5>ΛΑΒΑΣ 3</h5>
                    <div className="weight">
                        <p className="modalTitle">Weight:</p>
                        <p className="modalText">0,41kg </p>
                    </div>
                    <div className="ingredients">
                        <p className="modalTitle">Ingredients:</p>
                        <p className="modalText">wheat flour heat flour type 550, water,  type</p>
                    </div>
                    <div className="nutrition">
                        <p className="modalTitle">Nutrition Facts (100gr):</p>
                        <ul>
                            <li>kcal: 455</li>
                            <li>Protein: 7,6 g</li>
                            <li>Carbohydrate: 67,6 g</li>
                            <li>Fat: 4,3 g</li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Products() {
    const { t } = useTranslation();

    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    return (
        <>
            <div className="heroDiv" style={{ backgroundImage: "url(./desk4.jpg)" }}>
                <TopNavbar />
            </div>
            <Container className="con-pad">
                <div className="productsTitle">{t('products.title')}</div>
                <Row>
                    <Col md={4}>
                        <div className="prodDiv" onClick={() => ProductModal1(setModalShow1(true))}>
                            <div className="prodPhotoDiv">
                                <img src="./contact-image.jpg" alt="product photo" className="productPhoto" />
                            </div>
                            <div className="prodText">
                                <div className="prodTitle">Lavash</div>
                                <div className="text-end me-3">
                                    <div className="prodMore"> <i className="bi bi-arrow-right-circle-fill"></i> {t('products.more')}</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="prodDiv" onClick={() => ProductModal2(setModalShow2(true))}>
                            {/* <div className="prodDiv" onClick={() => setModalShow(true)}> */}
                            <div className="prodPhotoDiv">
                                <img src="./prod3.jpg" alt="product photo" className="productPhoto" />
                            </div>
                            <div className="prodText">
                                <div className="prodTitle">Ποντιακή Πίτα</div>
                                <div className="text-end me-3">
                                    <div className="prodMore"> <i className="bi bi-arrow-right-circle-fill"></i> {t('products.more')}</div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col md={4}>
                        <div className="prodDiv" onClick={() => ProductModal3(setModalShow3(true))}>
                            <div className="prodPhotoDiv">
                                <img src="./contact-image.jpg" alt="product photo" className="productPhoto" />
                            </div>
                            <div className="prodText">
                                <div className="prodTitle">ΛΑΒΑΣ 3</div>
                                <div className="text-end me-3">
                                    <div className="prodMore"> <i className="bi bi-arrow-right-circle-fill"></i> {t('products.more')}</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

            <ProductModal1 show={modalShow1} onHide={() => setModalShow1(false)} />
            <ProductModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
            <ProductModal3 show={modalShow3} onHide={() => setModalShow3(false)} />

            <Footer />
        </>
    )
}
