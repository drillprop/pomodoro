import React, { FC } from 'react';
import { ConfigWrapper } from './Config.styles';
import ConfigForm from './config/ConfigForm';
import Tasks from './config/Tasks';
import Heading from '../../components/Heading/Heading';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const Config: FC = () => {
  return (
    <>
      <ConfigWrapper>
        <Heading level='h1'>config</Heading>
        <Tasks />
        <ConfigForm />
        <GoBackLink>back</GoBackLink>
      </ConfigWrapper>
    </>
  );
};

export default Config;
