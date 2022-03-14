import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import User from './src/components/User';
import rootReducer from './src/reducers/rootReducer';
import MainApp from './src/Main';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;
