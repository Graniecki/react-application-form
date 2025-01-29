import { useState } from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ApplicationForm } from '../../components/ApplicationForm/ApplicationForm';
import Alert from '@mui/material/Alert';
import { Typography } from '@mui/material';

export const ApplyPage: React.FC = () => {
  const { t } = useTranslation();
  const [formSubmitStatus, setFormSubmitStatus] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");

  if (!role) {
    return <Navigate to="/404" />;
  }

  const handleFormSubmitStatus = (status: 'success' | 'error') => {
    setFormSubmitStatus(status);
  };

  return (
    <div className="apply-page">
      <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
        {t('fill_the_form')}
      </Typography>

      {formSubmitStatus !== 'success' && (
        <ApplicationForm role={role} handleFormSubmitStatus={handleFormSubmitStatus} />
      )}

      {formSubmitStatus && (
        <Alert severity={formSubmitStatus} sx={{ width: '100%', maxWidth: '600px', margin: '24px auto 0' }}>
          {`
            ${formSubmitStatus === 'success' ? t('form_submit_success_message') : t('form_submit_error_message')}
            ${t('check_all_positions')}
          `}
          <Link to='/'>{t('here')}</Link>
        </Alert>
      )}
    </div>
  );
};
