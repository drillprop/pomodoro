import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkSession } from '../../duck/users/userActions';
import GlobalStyle from '../../utils/GlobalStyle';
import HamburgerButton from './app/HamburgerButton';
import Menu from './app/Menu';
import Notification from '../Notification/Notification';
import Router from './app/Router';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loading/Loading';
import { selectIsGettingUser } from '../../duck/users/userSelectors';
import { useTransition, animated } from 'react-spring';
import { Layout } from './App.styles';

const App: React.FC = () => {
  const isGettingUser = useSelector(selectIsGettingUser);
  const transitions = useTransition(isGettingUser, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [checkSession]);

  return (
    <>
      <ProgressBar />
      <Notification />
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
