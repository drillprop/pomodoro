import React, { FC } from 'react';
import { StyledSelect } from './Select.styles';

interface Props {
  selected: string;
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
  selectors?: Array<string>;
}

const Select: FC<Props> = ({ selected, onChange, selectors }) => {
  return (
    <StyledSelect value={selected} onChange={onChange}>
      {selectors && selectors.map(key => <option key={key}>{key}</option>)}
    </StyledSelect>
  );
};

export default Select;
