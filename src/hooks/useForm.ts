import { useState, ChangeEvent } from 'react';

export default (initValues: any = {}): [any, any, any] => {
  const [values, setForm] = useState(initValues);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...values, [e.target.id]: e.target.value });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
  };
  return [values, handleInput, submitForm];
};
