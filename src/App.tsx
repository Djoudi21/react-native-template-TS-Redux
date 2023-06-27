import React from 'react';
import { Text } from 'react-native';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;
