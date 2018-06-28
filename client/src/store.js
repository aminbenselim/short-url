import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { sagaMiddleware, runSagaMiddleware } from './sagas';
import rootReducer from './reducers';

export const history = createHistory();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window.devToolsExtension === 'function'
    ? [window.devToolsExtension()]
    : [];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(rootReducer, {}, composedEnhancers);

runSagaMiddleware();

export default store;
