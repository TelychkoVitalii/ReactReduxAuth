import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureFakeBackend, store } from "./_helpers";
import { App } from "./App/App";

configureFakeBackend();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);