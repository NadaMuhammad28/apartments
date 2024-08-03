import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type RHFTextFieldProps = TextFieldProps & {
  name: string;
  label?: string;
};

const RHFTextField: React.FC<RHFTextFieldProps> = ({
  name,
  label,
  ...textFieldProps
}) => {
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
          helperText={errors[name]?.message?.toString()||''}
        />
      )}
    />
  );
};

export default RHFTextField;
