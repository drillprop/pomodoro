import { useState, ChangeEvent, FormEvent } from 'react';

export default (
  initValues: any = {}
): [
  any,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: FormEvent<HTMLFormElement>) => Promise<void>
] => {
  const [values, setForm] = useState(initValues);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reset = Object.keys(values).reduce((acc: any, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setForm(reset);
  };

  return [values, handleInput, submitForm];
};
