import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routes/AppRouter';

if (document.getElementById('admin-panel')) {
    ReactDOM.render(<AppRouter />, document.getElementById('admin-panel'));
}
