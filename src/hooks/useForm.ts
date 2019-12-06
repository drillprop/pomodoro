import { useState, ChangeEvent, FormEvent } from 'react';

export default (
  initValues: any = {}
): [
  any,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: FormEvent<HTMLFormElement>) => void,
  (state: any) => void
] => {
  const [values, setForm] = useState(initValues);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearForm(values);
  };

  const clearForm = (state: any) => {
    const reset = Object.keys(state).reduce((acc: any, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setForm(reset);
  };

  return [values, handleInput, submitForm, clearForm];
};
