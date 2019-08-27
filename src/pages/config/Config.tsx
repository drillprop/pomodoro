import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import ConfigForm from '../../components/Config/ConfigForm';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../elements/Titles';
import Tasks from '../../components/Config/Tasks';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../duck/store';
import { fetchTasks } from '../../duck/tasks/tasksActions';
import {
  firestoreData,
  updateTaskInFirestore
} from '../../utils/firebase/firestore';

const ConfigWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  justify-content: center;
`;

const GoBackLink = styled.h4`
  font-family: ${secondFont};
  text-align: right;
  margin-right: 16px;
`;

const Config: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }: ReduxState) => user.user);
  useEffect(() => {
    dispatch(fetchTasks(user));
  }, [user]);

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
