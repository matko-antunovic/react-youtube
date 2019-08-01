import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas"
import {applyMiddleware, createStore, compose} from "redux"



const configureStore = () => {
    const sagaMiddleware= createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store=createStore(
        rootReducer,
        composeEnhancers(
        applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store;
}


export default configureStore;
