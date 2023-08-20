import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { s } from 'react-native-wind';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={s`text-red-500`}>HOME</Text>
    </SafeAreaView>
  );
}
