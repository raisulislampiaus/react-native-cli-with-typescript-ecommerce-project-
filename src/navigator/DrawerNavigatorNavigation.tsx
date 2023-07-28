// src/DrawerNavigation.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation,  } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import UserScreen from '../screen/UserScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


const Drawer = createDrawerNavigator();

const DrawerNavigatorNavigation = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="bars" size={24} color="black" />
      </TouchableOpacity>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigatorNavigation;
