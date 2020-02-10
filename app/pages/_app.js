import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React from 'react';

import { CssBody } from '../constants/styles/global';
import Page from '../components/layout/Page/Page';
import Routing from './_routing';

export const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <CssBody />
    <Page>
      <Routing />
    </Page>
  </Router>
)
