/**
 * @file Main module: Renders the complete app to the screen
 * @module index
 */

// Global style. Import it first so its in the DOM first.
import './styles/index.styl';

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './modules/main';

if (!global.Intl) {
  require('intl');
  require('intl/locale-data/jsonp/en');
}

import {addLocaleData, IntlProvider} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
addLocaleData(enLocaleData);

import strings from './locale/en/strings.json';

// Render the application component to the proper DOM element.
ReactDOM.render(
  <IntlProvider locale="en" messages={strings}>
    <Main />
  </IntlProvider>,
  document.getElementById('root')
);
