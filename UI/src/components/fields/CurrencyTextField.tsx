import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

type CurrencyTextFieldProps = TextFieldProps& {
  name: string;
  label?: string;
  currency?: string; // e.g., 'USD', 'EUR'
  defaultValue?: number;
}
interface CustomNumericFormatProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  currency:string
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomNumericFormatProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange,currency="EGP ", ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix={currency}
      />
    );
  }
);

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({
  name,
  defaultValue = '',
  ...props
}) => {
  const { control } = useFormContext();



  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          InputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            inputComponent: NumericFormatCustom as any,
          }}
          variant="outlined"
        />
      )}
    />
  );
};

export default CurrencyTextField;

