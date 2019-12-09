import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkSession } from '../../duck/users/userActions';
import GlobalStyle from '../../utils/GlobalStyle';
import HamburgerButton from './app/HamburgerButton';
import Menu from './app/Menu';
import Router from './app/Router';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loading/Loading';
import { selectIsGettingUser } from '../../duck/users/userSelectors';

const App: React.FC = () => {
  const isGettingUser = useSelector(selectIsGettingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [checkSession]);

  return (
    <>
      <ProgressBar />
      <HamburgerButton />
      <Menu />
      <GlobalStyle />
      {isGettingUser ? <Loading /> : <Router />}
    </>
  );
};

export default App;
