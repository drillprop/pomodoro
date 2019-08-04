import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Config from './Config/Config';
import Interface from './Timer/Interface';
import { useSelector } from 'react-redux';
import HamburgerButton from './Menu/HamburgerButton';
import Register from './Register/Register';

const Router = () => {
  const isMenuVisible = useSelector((state: any) => state.isMenuVisible);
  return (
    <HashRouter>
      {isMenuVisible && <Route component={Menu} />}
      <Route component={HamburgerButton} />
      <Route path='/config' component={Config} />
      <Route path='/register' component={Register} />
      <Route exact path='/' component={Interface} />
    </HashRouter>
  );
};

export default Router;
