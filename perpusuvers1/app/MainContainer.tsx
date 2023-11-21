import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

//Screens
import HomePage from './HomePage';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import Login from './loginPage';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
                tabBarStyle: {padding: 10, height: 70}
            }}
            >
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Screen" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Setting" component={SettingScreen} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}