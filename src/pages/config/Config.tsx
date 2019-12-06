import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ConfigWrapper, GoBackLink } from './Config.styles';
import ConfigForm from './config/ConfigForm';
import Tasks from './config/Tasks';
import Heading from '../../components/Heading/Heading';

const Config: FC = () => {
  return (
    <>
      <ConfigWrapper>
        <Heading level='h1'>config</Heading>
        <Tasks />
        <ConfigForm />
        <GoBackLink>
          <Link to='/'>back</Link>
        </GoBackLink>
      </ConfigWrapper>
    </>
  );
};

export default Config;
