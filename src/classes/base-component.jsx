/**
 * @file Base Component for React that auto-binds in ES6
 * @module classBaseComponent
 * @see BaseComponent
 */

import React from 'react';

import bindMethods from '../util/bind-methods';

/**
 * Creates a new Base React component with self-bound methods
 * @constructor
 * @alias BaseComponent
 * @requires React
 * @requires module:utilBindMethods
 * @extends React.Component
 */
class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this);
  }
}

export default BaseComponent;
