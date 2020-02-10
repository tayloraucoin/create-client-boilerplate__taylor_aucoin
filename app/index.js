import './constants/styles/importer.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Heading = styled.h1`
  font-family: Alice;
`;

ReactDOM.render(
  <Heading>Hello World</Heading>,
  document.getElementById('application')
);
