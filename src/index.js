'use strict';

import React from 'react';
// short notation
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import NextApp from './app';

const renderApp = (NextApp) => {
  render(
    <AppContainer >
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    renderApp(NextApp);
  });
}
