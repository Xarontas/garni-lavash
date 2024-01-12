import { useTranslation } from 'react-i18next';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function Section1() {
    const { t } = useTranslation();
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
                            <div className="card1" style={{ border: "5px solid #fba0a0" }}>
                                <div className="cardTitle" style={{ color: '#fba0a0' }}>{t('section1.title1')}</div>
                                <div className="cardTxt">{t('section1.txt1')}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="skew-cc"></div>
                <Row className="sectionDiv white-block">
                    <Col lg={6} className="ord">
                        <div className="cardboard">
                            <div className="card1" style={{ border: "5px solid green" }}>
                                <div className="cardTitle" style={{ color: 'green' }}>{t('section1.title2')}</div>
                                <div className="cardTxt">{t('section1.txt2')}</div>
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
                            <div className="card1" style={{ border: "5px solid #fba0a0" }}>
                                <div className="cardTitle" style={{ color: '#fba0a0' }}>{t('section1.title3')}</div>
                                <div className="cardTxt">{t('section1.txt3')}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
