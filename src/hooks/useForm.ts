import { useState, ChangeEvent } from 'react';

export default (initValues: any = {}): [any, any, any] => {
  const [values, setForm] = useState(initValues);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
  };

  return [values, handleInput, submitForm];
};
