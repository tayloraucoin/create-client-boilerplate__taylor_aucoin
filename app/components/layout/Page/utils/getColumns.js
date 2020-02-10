import styled from 'styled-components';
import React from 'react';

import { d_columns } from '../../../../constants/styles/dimensions';

const Column = styled.div`
  background-color: #a9a9a9;
  height: 100%;
  opacity: 0.1;
  width: ${props => `${props.width}px`};
`;

export default () => {
  const columns = [];
  for (let count = 0; count < d_columns.count; count++) {
    columns.push(<Column key={count} width={d_columns.width} />);
  }
  return columns;
};
