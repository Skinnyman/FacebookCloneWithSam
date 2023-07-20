import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import MainScreen from './Screen/MainScreen';
import ForYouScreen from './Screen/ForYouScreen';
import LiveScreen from './Screen/LiveScreen';
import ForgetScreen from './Screen/ForgetScreen';
import SearchScreen from './Screen/SearchScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="For" component={ForYouScreen} />
        <Stack.Screen name="live" component={LiveScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default MyStack