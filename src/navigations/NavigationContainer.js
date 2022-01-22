import React,{useEffect,useState} from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import ApprovedList from '../screen/ApprovedList';
import EnterScreen from '../screen/EnterScreen';
import BackIcon from './BackIcon'
const AuthStack = createStackNavigator();


export default function AppNavigation(props) {

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName='EnterScreen'
      >
        <AuthStack.Screen
          name="ApprovedList"
          component={ApprovedList}
          options={{
            title: <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', }}>Approved List</Text>,
            showIcon: true,
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <BackIcon />
            ),
            headerRight: () => (
             <Text/>
            ),
          }}
        />
         <AuthStack.Screen
          name="EnterScreen"
          component={EnterScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>

    </NavigationContainer>
  );
}
