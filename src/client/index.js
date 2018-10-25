import React from 'react';
import { hydrate } from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom'

hydrate(
    <BrowserRouter>
        <App name={window.__INITIAL_STATE} />
    </BrowserRouter>, document.getElementById('app')
    );