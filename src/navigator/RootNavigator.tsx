import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabsNavigation } from './BottomTabsNavigation';
import DrawerNavigatorNavigation from './DrawerNavigatorNavigation';
import Details from '../screen/Details';
import { RootStackParamList } from '../type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
      {/* <RootStack.Screen
        name="Drawer"
        component={DrawerNavigatorNavigation}
        options={{ headerShown: false }}
      />
       */}
        <RootStack.Screen
        name="details"
        component={Details}
        
      />
    </RootStack.Navigator>
  );
};