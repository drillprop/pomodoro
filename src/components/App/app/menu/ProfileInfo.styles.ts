import styled from 'styled-components';
import { background, secondaryBackground } from '../../../../utils/colors';
import { secondFont } from '../../../../utils/fonts';

export const ProfileInfoWrapper = styled.div`
  margin-top: 70px;
`;

export const Avatar = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: ${background};
  border: 10px solid ${secondaryBackground};
`;

export const Name = styled.h1`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 4px;
  font-size: 28px;
  font-family: ${secondFont};
  font-weight: 600;
  color: ${background};
  text-align: center;
`;

export const Email = styled.h2`
  margin: 0;
  margin-top: 16px;
  font-size: 20px;
  text-transform: lowercase;
  font-family: ${secondFont};
  font-weight: 400;
  color: ${secondaryBackground};
  text-align: center;
`;
