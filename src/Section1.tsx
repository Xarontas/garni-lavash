import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function Section1() {
    return (
        <>
            <div>
                <div className="skew-c"></div>
                <Row className="sectionDiv colour-block">
                    <Col lg={6}>
                        <div className="sectionPhoto1">
                            <img src="./s1.jpg" alt="photo" width={'100%'} height={'auto'} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="cardboard">
                            <div className="card1" style={{ border: "5px solid red" }}>
                                <div className="cardTitle" style={{ color: 'red' }}>LAVASH 1, OAT BRAN & WHOLE WHEAT LAVASH BREAD</div>
                                <div className="cardTxt">Our signature Flax, Oat Bran & Whole Wheat Lavash breads are one of the healthiest bread options around, with the same great taste you’ve grown to love from</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="skew-cc"></div>
                <Row className="sectionDiv white-block">
                    <Col lg={6} className="ord">
                        <div className="cardboard">
                            <div className="card1" style={{ border: "5px solid green" }}>
                                <div className="cardTitle" style={{ color: 'green' }}>ΠΟΝΤΙΑΚΗ ΠΙΤΑ</div>
                                <div className="cardTxt">Oat Bran & Whole Wheat Lavash breads, Oat Bran & Whole Wheat Lavash breads are one of the healthiest bread options around, with the same great taste you’ve grown to love from</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="sectionPhoto1">
                            <img src="./s2.jpg" alt="photo" width={'100%'} height={'auto'} />
                        </div>
                    </Col>
                </Row>
                <div className="skew-c"></div>
                <Row className="sectionDiv colour-block">
                    <Col lg={6}>
                        <div className="sectionPhoto1">
                            <img src="./s3.jpg" alt="photo" width={'100%'} height={'auto'} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="cardboard">
                            <div className="card1" style={{ border: "5px solid red" }}>
                                <div className="cardTitle" style={{ color: 'red' }}>LAVASH 3 WHEAT FLAX, OAT BRAN BREAD</div>
                                <div className="cardTxt">Same great taste you’ve grown Our signature Flax, Oat Bran & Whole Wheat Lavash breads are one of the healthiest bread options around, with the  to love from</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
