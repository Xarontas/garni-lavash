import { useTranslation } from 'react-i18next';
export default function SectionTitle() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="sectionTitle"> {t('sectiontitle.txt')}</div>
        </>
    )
}