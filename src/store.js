import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import Reducers from './reducers/index.js';

const persistedReducer = persistReducer({
    key:'root',
    storage:AsyncStorage,
    whitelist:['shoppingCartReducer']
}, Reducers);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};