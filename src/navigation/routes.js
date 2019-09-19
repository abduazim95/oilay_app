import React from 'react';
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import FindScreen from '@/viewscreens/FindScreen';
import VoiceSenderScreen from '@/viewscreens/VoiceSenderScreen';
import SideBar from '@/viewcomponents/SideBar';

const StackNavigator = createStackNavigator(
  {
    Find: {
      screen: FindScreen
    },
    VoiceSender: {
      screen: VoiceSenderScreen
    }
  },
  {
    initialRouteName: 'Find',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F06292',
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