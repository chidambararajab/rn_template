import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';

import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(sagas);
