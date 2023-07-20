import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYouScreen from '../Screen/ForYouScreen';
import LiveScreen from '../Screen/LiveScreen';

const Tab = createMaterialTopTabNavigator();

const Watchtab = () => {
  return (
    <> 
      <Tab.Navigator>
            <Tab.Screen name="For" component={ForYouScreen} />
            <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
     </>
  )
}

export default Watchtab