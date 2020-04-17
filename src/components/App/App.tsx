import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import { checkSession } from '../../duck/users/userActions';
import { selectIsGettingUser } from '../../duck/users/userSelectors';
import GlobalStyle from '../../utils/GlobalStyle';
import Loading from '../Loading/Loading';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Layout } from './App.styles';
import HamburgerButton from './app/HamburgerButton';
import Menu from './app/Menu';
import Router from './app/Router';
import Notification from '../Notification/Notification';
import Logo from './app/Logo';

const App: React.FC = () => {
  const isGettingUser = useSelector(selectIsGettingUser);
  const transitions = useTransition(isGettingUser, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [checkSession]);

  return (
    <>
      <Notification />
      <Logo />
      <ProgressBar />
      <HamburgerButton />
      <Menu />

      <GlobalStyle />
      <Layout>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div style={props} key={key}>
              <Loading />
            </animated.div>
          ) : (
            <animated.div style={props} key={key}>
              <Router />
            </animated.div>
          )
        )}
      </Layout>
    </>
  );
};

export default App;
