import { useState, ChangeEvent } from 'react';
import { registerAccount } from '../utils/firebase/auth';

export default (initValues: any = {}): [any, any, any] => {
  const [values, setForm] = useState(initValues);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    registerAccount({ ...values });
  };
  return [values, handleInput, submitForm];
};
