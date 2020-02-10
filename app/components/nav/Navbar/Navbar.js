import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import {
  c_grey_dark,
  c_white
} from '../../../constants/styles/colors';
import { t_font_family } from '../../../constants/styles/typography';

const Root = styled.div`
  align-items: center;
  background-color: ${c_grey_dark};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  justify-content: space-between;
  padding: 0 4rem;
  width: 100%;

  * {
    font-family: ${t_font_family} !important;
  }
`;

const Section = styled.div`
  align-items: center;
  display: flex;

  a, h3 {
    color: ${c_white};
    height: fit-content;
    margin: 0 2rem;
    text-decoration: none;
  }
`;

export default ({ history }) => (
  <Root id="navbar">
    <Section>
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
    </Section>
    <Section>
      <h3>Welcome</h3>
    </Section>
  </Root>
);
