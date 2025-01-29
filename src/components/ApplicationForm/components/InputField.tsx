import { Controller, Control, FieldErrors } from 'react-hook-form';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';

type InputFieldProps = {
  label: string;
  id: string;
  type: 'text' | 'number' | 'checkbox';
  control: Control<any>;
  errors: FieldErrors;
  requiredMessage?: string;
  required?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({ label, id, type, control, errors, requiredMessage, required }) => {
  return (
    <div>
      <Controller
        name={id}
        control={control}
        rules={{ required: required ? requiredMessage : false }}
        render={({ field }) =>
          type === 'checkbox' ? (
            <FormControlLabel
              control={<Checkbox {...field} checked={!!field.value} />}
              label={label}
            />
          ) : (
            <TextField
              {...field}
              id={id}
              label={label}
              type={type}
              variant="outlined"
              error={!!errors[id]}
              helperText={errors[id]?.message}
              fullWidth
            />
          )
        }
      />
    </div>
  );
};
