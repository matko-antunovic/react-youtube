import React from 'react';
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas"
import {applyMiddleware, createStore}



const configureStore = () => {
    const sagaMiddleware= createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store=createStore(
        reducer,
        composeEnhancers(
        applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
}

export default configureStore;
