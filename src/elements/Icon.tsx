import React from 'react';

interface IconProps {
  name: string;
  color: string;
}

const Icon = ({ name, color }: IconProps) => {
  switch (name) {
    case 'play':
      return (
        <svg width='60' height='60' viewBox='-12 -12 55 55'>
          <defs />
          <path
            d='M16.661,8.708a5.549,5.549,0,0,1,10.055,0l11.1,20.62c2.4,4.458-.426,10.178-5.028,10.178H10.59c-4.6,0-7.427-5.721-5.028-10.178Z'
            transform='translate(39.506 -4.689) rotate(90)'
            fill={color || 'black'}
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
