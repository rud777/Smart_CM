import {persistStore, persistReducer} from 'redux-persist';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogicMiddleware} from 'redux-logic';
import {fetchPollsLogic,fetchPollsList} from './logic/index';
const logics = [fetchPollsLogic,fetchPollsList];
const logicMiddleware = createLogicMiddleware(logics);
const middleware = applyMiddleware(logicMiddleware);
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

export {store, persistor};
