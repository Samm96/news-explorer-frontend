import React from 'react';

export const useFormValidator = (inputsArr) => {
  const intValues = {};

  inputsArr.map(inputName => intValues[inputName] = '');

  const [values, setValues] = React.useState(intValues);
  const [errors, setErrors] = React.useState(intValues);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, validationMessage } = e.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, isValid, errors, handleChange, resetForm };
};
