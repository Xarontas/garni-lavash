import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import TopNavbar from './TopNavbar';

export default function DivTop() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='divTop'>
                <TopNavbar />
                <Container>
                    <div className='topTitle'>{t('divtop.title')}</div>
                </Container>
            </div>
        </>
    )
}