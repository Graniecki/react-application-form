import { Routes, Route } from 'react-router-dom';

import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import './i18n';

import { HomePage } from './pages/HomePage/HomePage'
import { ApplyPage } from './pages/ApplyPage/ApplyPage'
import { NotFound } from './pages/NotFound/NotFound'
import './App.css'

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div style={{
        padding: '16px',
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        borderBottom: '1px solid #1976d2',
        marginBottom: '24px'
      }}>
        <Button variant={i18n.language === 'en' ? 'contained' : 'outlined'} onClick={() => i18n.changeLanguage('en')}>EN</Button>
        <Button variant={i18n.language === 'pl' ? 'contained' : 'outlined'} onClick={() => i18n.changeLanguage('pl')}>PL</Button>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
