import { createStore, applyMiddleware } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ collapsed: true });

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);