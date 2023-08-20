import HomeScreen from '../screens/HomeScreen';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

const RootStack = createNativeStackNavigator();

export function RootStackRouter() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const tokens = useSelector((state: any) => state.user.tokens);

  useEffect(() => {
    async function checkTokensAndSetNavigation() {
      try {
        if (tokens.accessToken !== null) {
          setInitialRoute('Home');
        } else {
          setInitialRoute('Login');
        }
      } catch (error) {
        setInitialRoute('Login');
      }
    }

    checkTokensAndSetNavigation();
  }, []);

  return initialRoute !== null ? (
    <RootStack.Navigator initialRouteName={initialRoute as 'Login' | 'Home'}>
      <RootStack.Group>
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  ) : (
    <Text>Loading</Text>
  );
}
