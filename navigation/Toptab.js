 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import HomeScreen from '../Screen/HomeScreen';
 import FriendScreen from '../Screen/FriendScreen'
 import WatchScreen from '../Screen/WatchScreen'
 import MarketPlaceScreen from '../Screen/MarketPlaceScreen'
 import NotificationScreen from '../Screen/NotificationScreen'
 import ProfileScreen from '..//Screen/ProfileScreen'
 import {Ionicons,MaterialCommunityIcons} from 'react-native-vector-icons'
 
 
 const Tab = createMaterialTopTabNavigator();


 function MyTabs() {
   return (
    <>
   <Tab.Navigator
    screenOptions={() =>({
        tabBarShowLabel:false,
        tabBarItemStyle: { width:66,paddingTop:12 ,height:70},
        tabBarStyle: { bottom:2,bottom:19},
        
    })}
   >
           
       <Tab.Screen name="Home" component={HomeScreen}
       options={{tabBarIcon: ({color,focused}) => (
        <Ionicons
        name={focused ? 'home' : 'home-outline'}
        size={25}
        color={focused ? 'blue' : '#272727'}
        />
       )}} />
       <Tab.Screen name="Friends" component={FriendScreen}
         options={{tabBarIcon: ({focused,color}) => (
            <Ionicons
            name={focused ? 'people-sharp' : 'people-outline'}
            size={25}
            color={focused ? 'blue' : "#272727"}
           
            /> )}}
        />
       <Tab.Screen name="Watch" component={WatchScreen} 
       options={{tabBarIcon: ({color,focused}) => (
        <Ionicons
        name={focused ? 'logo-youtube' : 'tv-outline'}
        size={25}
        color={focused ? 'blue' : '#272727'}
        /> )}}
       />
       <Tab.Screen name="MarketPlace" component={MarketPlaceScreen} 
        options={{tabBarIcon: ({focused,color}) => (
            <MaterialCommunityIcons
            name={focused ? 'storefront' : 'storefront-outline'}
            size={25}
            color={focused ? 'blue' : '#272727'}
            /> )}}
       />
       <Tab.Screen name="Notification" component={NotificationScreen} 
         options={{tabBarIcon: ({focused,color}) => (
            <Ionicons
            name={focused ? 'notifications' : 'notifications-outline'}
            size={25}
            color={focused ? 'blue' : '#272727'}
            /> )}}
       />
       <Tab.Screen name="Profile" component={ProfileScreen}
        options={{tabBarIcon: ({focused,color}) => (
            <Ionicons
            name={focused ? 'menu' : 'menu-outline'}
            size={25}
            color={focused ? 'blue' : '#272727'}
            /> )}}
        />
     </Tab.Navigator>
     </>
   );
 }

 export default MyTabs