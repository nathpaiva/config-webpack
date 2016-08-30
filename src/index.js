'use strict';

import Title from './app';

import React from 'react';
// short notation
// react-dom
import { render } from 'react-dom';


render(
    <Title />,
    document.querySelector('[data-js="app"]')
)
