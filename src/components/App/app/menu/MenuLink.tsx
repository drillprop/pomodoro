import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useRouter from '../../../../hooks/useRouter';
import { background } from '../../../../utils/colors';
import Icon from '../../../Icon/Icon';

interface Props {
  iconName: string;
  path: string;
}

const MenuLink: FC<Props> = ({ iconName, path, children }) => {
  const itemIconProps = {
    size: 30,
    style: {
      marginRight: '10px',
      position: 'relative',
      top: '0.25em'
    },
    color: background
  };
  const router = useRouter();

  return (
    <>
      {router.location.pathname === path ? (
        <>
          <Icon name='home' {...itemIconProps} />
          <Link to='/'>back to app</Link>
        </>
      ) : (
        <>
          <Icon name={iconName} {...itemIconProps} />
          <Link to={path}>{children}</Link>
        </>
      )}
    </>
  );
};

export default MenuLink;
