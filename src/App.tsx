import React from 'react';
import { Text } from "react-native";
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Home from './components/Home'
function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
