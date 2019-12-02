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
  };

  return [values, handleInput, submitForm];
};
