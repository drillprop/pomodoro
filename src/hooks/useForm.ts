import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../duck/users/userActions';

export default (initValues: any = {}): [any, any, any] => {
  const dispatch = useDispatch();

  const [values, setForm] = useState(initValues);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    dispatch(register({ ...values }));
  };

  return [values, handleInput, submitForm];
};
