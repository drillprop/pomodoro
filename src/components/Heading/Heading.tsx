import React, { FC } from 'react';
import { StyledH1, StyledH2 } from './Heading.styles';

interface Props {
  level: 'h1' | 'h2' | 'h3';
  children?: any;
  mtop?: number;
}

const Heading: FC<Props> = ({ level, children, mtop }) => {
  switch (level) {
    case 'h1':
      return <StyledH1 mtop={mtop}>{children}</StyledH1>;
    case 'h2':
      return <StyledH2 mtop={mtop}>{children}</StyledH2>;
    default:
      return null;
  }
};

export default Heading;
