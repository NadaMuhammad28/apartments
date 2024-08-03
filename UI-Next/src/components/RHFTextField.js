import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const RHFTextField = ({ name, label, ...textFieldProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...textFieldProps}
          label={label}
          variant="outlined"
          error={!!errors[name]}
          helperText={errors[name]?.message || ''}
        />
      )}
    />
  );
};

export default RHFTextField;
