import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

export default function About() {
    return (
        <>
            <div className="heroDiv">
                <TopNavbar />
            </div>
            <div className="aboutDiv">
                <Container>
                    <div className='aboutTitle'>Σχετικά με εμάς</div>
                    <Row>
                        <Col sm={12} col={12}>
                            <div className="aboutText">Στη Garni Bakery λειτουργούμε πάντα με τις σταθερές μας αξίες, την Ποιότητα και το ίδιο πάθος και ενθουσιασμό που βάλαμε στην δημιουργία του πρώτου μας ψωμιού. Οι άνθρωποί μας και η στήριξη των συνεργατών μας είναι πηγή δύναμης για να συνεχίσουμε την ανοδική μας πορεία. Τα προϊόντα «Garni» βρίσκονται σε όλες τις μεγάλες αλυσίδες Σούπερ Μάρκετ της Ελληνικής αγοράς, καθώς και σε μικρότερα καταστήματα, περίπτερα, μίνι μάρκετ σε όλη την χώρα. </div>
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
                                    Ποιοτικός έλεγχος - Συστήματα διάσφαλισης ποιότητας</h2>
                                <p className="aboutSection2Text p-4">Η "Garni Bakery" εφαρμόζει λεπτομερώς τα συστήματα διασφάλισης ποιότητας IFS, BRC, ISO 22000. Η καλή εφαρμογή και τήρηση των συστημάτων ποιότητας πιστοποιήθηκαν από τον αρμόδιο γερμανικό φορέα πιστοποίησης TUV.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}