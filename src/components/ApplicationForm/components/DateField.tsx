import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { TextField } from '@mui/material';

type DateFieldProps = {
  label: string;
  id: string;
  control: Control<any>;
  errors: FieldErrors;
  required?: boolean;
  requiredMessage?: string;
};

export const DateField: React.FC<DateFieldProps> = ({ label, id, control, errors, required, requiredMessage }) => {
  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? requiredMessage : false }}
      render={({ field }) => (
        <TextField
          {...field}
          type="date"
          label={label}
          InputLabelProps={{ shrink: true }}
          error={!!errors[id]}
          helperText={errors[id]?.message}
          fullWidth
        />
      )}
    />
  );
};
