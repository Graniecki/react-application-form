import { useTranslation } from 'react-i18next';
import { TextField, MenuItem } from '@mui/material';

interface SelectProps {
  id: string;
  label: string;
  name: string;
  value: string;
  options: { id: string | number; slug: string; title: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ id, label, name, value, options, onChange }) => {
  const { t } = useTranslation();

  return (
    <TextField
      select
      id={id}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    >
      <MenuItem value='' disabled>{t('select_option')}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.slug}>
          {option.title}
        </MenuItem>
      ))}
    </TextField>
  );
};
