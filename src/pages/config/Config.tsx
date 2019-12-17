import React, { FC } from 'react';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import Heading from '../../components/Heading/Heading';
import Notification from '../../components/Notification/Notification';
import ConfigForm from './config/ConfigForm';
import Tasks from './config/Tasks';

const Config: FC = () => {
  return (
    <>
      <Notification />
      <Heading level='h1'>config</Heading>
      <Tasks />
      <ConfigForm />
      <GoBackLink>back</GoBackLink>
    </>
  );
};

export default Config;
