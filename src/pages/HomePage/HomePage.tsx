import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { openPositions } from '../../data/fakeData';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Select } from '../../components/Select/Select';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPosition, setSelectedPosition] = useState('');

  const handlePosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPosition(e.target.value);
  };

  return (
    <div className='homepage'>
      <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
        {t('greeting')}
      </Typography>

      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <Select
          id="position"
          label={t('choose_position_from_list')}
          name="position"
          value={selectedPosition}
          options={openPositions}
          onChange={handlePosition}
        />

        {selectedPosition && (
          <Button
            component={Link}
            to={`/apply?role=${selectedPosition}`}
            variant="contained"
            sx={{ display: 'block', textAlign: 'center' }}
          >{t('click_to_continue')}</Button>
        )}
      </div>
    </div>
  );
};
