import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ConfigForm from '../../components/Config/ConfigForm';
import Tasks from '../../components/Config/Tasks';
import { MainTitle } from '../../elements/Titles';
import { ConfigWrapper, GoBackLink } from './Config.styles';

const Config: FC = () => {
  return (
    <>
      <ConfigWrapper>
        <MainTitle>config</MainTitle>
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
