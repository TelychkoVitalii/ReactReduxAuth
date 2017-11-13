import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureFakeBackend } from "./_helpers";

configureFakeBackend();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);