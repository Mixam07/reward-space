import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './nullstyle.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components/App/AppContainer';

const container = document.getElementById('root');
if (!container) throw new Error("Root container not found");

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);