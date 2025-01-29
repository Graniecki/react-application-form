import { useTranslation } from 'react-i18next';
import { SelectOption } from '../../../types/types';
import { TextField, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';

interface SelectFieldProps {
  id: string;
  label: string;
  control: any;
  errors: any;
  required?: boolean;
  requiredMessage?: string;
  options: SelectOption[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  control,
  errors,
  required = false,
  requiredMessage,
  options,
}) => {
  const { t } = useTranslation();

  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? requiredMessage : false }}
      render={({ field }) => (
        <TextField
          {...field}
          select
          id={id}
          label={label}
          fullWidth
          error={!!errors[id]}
          helperText={errors[id]?.message}
        >
          <MenuItem value="">{`${t('select')} ${label}`}</MenuItem>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
