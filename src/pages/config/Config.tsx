import React, { FC } from 'react';
import ConfigForm from './config/ConfigForm';
import Tasks from './config/Tasks';
import Heading from '../../components/Heading/Heading';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const Config: FC = () => {
  return (
    <>
      <Heading level='h1'>config</Heading>
      <Tasks />
      <ConfigForm />
      <GoBackLink>back</GoBackLink>
    </>
  );
};

export default Config;
