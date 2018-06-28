import createSagaMiddleware from 'redux-saga';

import linksSaga from '../links/saga';

export const sagaMiddleware = createSagaMiddleware();
export const runSagaMiddleware = () => sagaMiddleware.run(linksSaga);
