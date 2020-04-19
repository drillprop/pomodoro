import React, { FC } from 'react';
import { grays, reds } from '../../../../utils/colors';
import Icon from '../../../Icon/Icon';
import { Avatar, Email, ProfileInfoWrapper } from './ProfileInfo.styles';

const ProfileInfo: FC<{
  user: any;
}> = ({ user }) => {
  return (
    <ProfileInfoWrapper>
      <Avatar>
        <Icon size={100} color={user ? reds[0] : grays[2]} name='profile' />
      </Avatar>
      <Email>{user ? user.email : `you're not logged in`}</Email>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
