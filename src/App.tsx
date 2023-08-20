import React from 'react';
import { Text } from 'react-native';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { RootStackRouter } from './routes/RootStack';
import { NavigationContainer } from '@react-navigation/native';

export function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <RootStackRouter />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
