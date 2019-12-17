import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from '../../../hooks/useRouter';
import { HamburgerWrapper } from './HamburgerButton.styles';
import { selectIsMenuVisible } from '../../../duck/menu/menuSelectors';
import { showMenu } from '../../../duck/menu/menuActions';

const HamburgerButton: FC = () => {
  const isMenuVisible = useSelector(selectIsMenuVisible);

  const route = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMenu(false));
  }, [route.location]);

  return (
    <HamburgerWrapper>
      <input
        type='checkbox'
        checked={isMenuVisible}
        onChange={() => dispatch(showMenu(!isMenuVisible))}
      />
      <div />
    </HamburgerWrapper>
  );
};

export default HamburgerButton;
