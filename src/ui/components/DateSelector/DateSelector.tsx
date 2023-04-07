import * as React from 'react';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateValidationError } from '@mui/x-date-pickers/models';

import { FC } from "react";
import { ChangeHandler, RefCallBack } from 'react-hook-form';


interface Props {
  label: string;
  name: string;
  onChange: (newValue: any) => void;
  onBlur: ChangeHandler,
  minDate: Date;
  maxDate: Date;
  ref: RefCallBack;
  defaultValue?: string;
  hasError: boolean;
  helperText?: string
}

export const DateSelector: FC<Props > = ({label, name, onChange, defaultValue, minDate, maxDate, ref, hasError, helperText}) => {

  const [error, setError] = React.useState<DateValidationError | null>(null);

  const errorMessage = React.useMemo(() => {
    switch (error) {
      case 'maxDate':{
        return `Please select a date before ${maxDate}`;
      }

      case 'minDate': {
        return `Please select a date after ${minDate}`;
      }

      case 'invalidDate': {
        return 'Your date is not valid';
      }

      default: {
        return '';
      }
    }
  }, [error]);

  return (

      <DatePicker
          label={label}
          onChange={onChange}
          minDate={dayjs(minDate.toISOString())}
          maxDate={dayjs(maxDate.toISOString())}
          onError={(newError) => setError(newError)}
          defaultValue={dayjs(defaultValue)}
          slotProps={{
            textField: {
              error: hasError || errorMessage.length>0,
              name,
              helperText: errorMessage.length>0 ? errorMessage :helperText ,
              ref
            },
          }}
        />

  );
}