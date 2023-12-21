import Container from 'react-bootstrap/Container';
import TopNavbar from './TopNavbar';

export default function DivTop() {
    return (
        <>
            <div className='divTop'>
                <TopNavbar />
                <Container>
                    <div className='topTitle'>Η Ποιότητα συναντάει τη Παράδοση..</div>
                </Container>
            </div>
        </>
    )
}