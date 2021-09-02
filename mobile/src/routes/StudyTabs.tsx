import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import Configs from '../pages/Config'

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="Cards"
        component={TeacherList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="copy-outline" size={size} color={ focused ? '#000000' : color } />
            )
          }
        }}
      />

      <Screen
        name="Matches"
        component={Favorites}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="heart-outline" size={size} color={ focused ? '#000000' : color } />
            )
          }
        }}
      />

      <Screen
        name="Configs"
        component={Configs}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="cog-outline" size={size} color={ focused ? '#000000' : color } />
            )
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;