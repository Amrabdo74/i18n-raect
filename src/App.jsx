import  { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import arStyles from './styles/ar.module.css';
import enStyles from './styles/en.module.css';

function App() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.className = currentLanguage === 'ar' ? 'ar' : 'en';
  }, [currentLanguage]);

  const styles = currentLanguage === 'ar' ? arStyles : enStyles;

  return (
    <div className={styles.container}>
      <header>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ar')}>العربية</button>
      </header>
    </div>
  );
}

export default App;
