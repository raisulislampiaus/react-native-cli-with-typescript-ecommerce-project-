import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigator/RootNavigator';
import {NativeBaseProvider} from 'native-base';
import { LogBox } from "react-native";


LogBox.ignoreAllLogs(true);
function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
