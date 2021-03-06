import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteName from './RouterName'

import HomeScreen from '../Screens/Home'
import AboutScreen from "../Screens/About";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackRouter = function () {
    return (
        <Stack.Navigator initialRouteName={RouteName.Home}>
            <Stack.Screen name={RouteName.Home} component={HomeScreen} />
            <Stack.Screen name={RouteName.Home} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default function TabRouter() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, color, size }) =>{
                        let iconName = "planet";

                        if(route.name == RouteName.Home){
                            iconName = focused ? "home" : "home-outline"
                        }
                        if(route.name == RouteName.About){
                            iconName = focused ? "information-circle" : "information-circle-outline"
                        }
                        return <Icon name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name={RouteName.Home} component={HomeScreen} />
                <Tab.Screen name={RouteName.About} component={AboutScreen} />
                {/* <Tab.Screen options={{ headerShown: false }} name={RouteName.Home} component={StackRouter} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}