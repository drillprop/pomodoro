import { User } from 'firebase';
import React, { FC } from 'react';
import Icon from '../../../Icon/Icon';
import { primary } from '../../../../utils/colors';
import { Avatar, Email, Name, ProfileWrapper } from './Profile.styles';

const Profile: FC<{
  user: User | null;
}> = ({ user }) => {
  return (
    <ProfileWrapper>
      <Avatar>
        <Icon size={100} color={primary} name='profile' />
      </Avatar>
      <Name>{user && user.displayName}</Name>
      <Email>{user && user.email}</Email>
    </ProfileWrapper>
  );
};

export default Profile;
