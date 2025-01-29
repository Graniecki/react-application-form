import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormHelperText, FormGroup } from '@mui/material';

type CheckboxFieldProps = {
  label: string;
  id: string;
  control: Control<any>;
  errors: FieldErrors;
  required?: boolean;
  requiredMessage?: string;
};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, id, control, errors, required, requiredMessage }) => {
  return (
    <FormGroup>
      <Controller
        name={id}
        control={control}
        rules={{ required: required ? requiredMessage : false }}
        render={({ field }) => (
          <>
            <FormControlLabel
              control={<Checkbox {...field} checked={!!field.value} />}
              label={label}
            />
            {errors[id] && <FormHelperText error>{errors[id]?.message}</FormHelperText>}
          </>
        )}
      />
    </FormGroup>
  );
};
