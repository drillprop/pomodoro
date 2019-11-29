import React, { FC } from 'react';
import Icon from '../../../Icon/Icon';
import { primary } from '../../../../utils/colors';
import { Avatar, Email, ProfileInfoWrapper } from './ProfileInfo.styles';

const ProfileInfo: FC<{
  user: any;
}> = ({ user }) => {
  return (
    <ProfileInfoWrapper>
      <Avatar>
        <Icon size={100} color={primary} name='profile' />
      </Avatar>
      <Email>{user && user.email}</Email>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
