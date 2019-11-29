import React, { FC } from 'react';
import Icon from '../../../Icon/Icon';
import { primary } from '../../../../utils/colors';
import { Avatar, Email, ProfileWrapper } from './Profile.styles';

const Profile: FC<{
  user: any;
}> = ({ user }) => {
  return (
    <ProfileWrapper>
      <Avatar>
        <Icon size={100} color={primary} name='profile' />
      </Avatar>
      <Email>{user && user.email}</Email>
    </ProfileWrapper>
  );
};

export default Profile;
