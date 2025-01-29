import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { TextField } from '@mui/material';

type TextAreaFieldProps = {
  label: string;
  id: string;
  control: Control<any>;
  errors: FieldErrors;
  required?: boolean;
  requiredMessage?: string;
};

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, control, errors, required, requiredMessage }) => {
  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? requiredMessage : false }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          multiline
          rows={4}
          fullWidth
          error={!!errors[id]}
          helperText={errors[id]?.message}
        />
      )}
    />
  );
};
