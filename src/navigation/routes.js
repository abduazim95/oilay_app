import React from 'react';
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from '@/viewscreens/HomeScreen';
import SideBar from '@/viewcomponents/SideBar';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7e57c2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppNavigator = createDrawerNavigator(
  {
    Menu: StackNavigator
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default AppNavigator;