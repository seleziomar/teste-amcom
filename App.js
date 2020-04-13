import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store.js';

import MainTab from './src/navigators/MainTab';

export default () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainTab />
      </PersistGate>
    </Provider>
)