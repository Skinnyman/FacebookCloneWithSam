import { View, Text, TouchableOpacity, FlatList, ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import SearchTop from '../component/SearchTop'
import SearchMiddle from '../component/SearchMiddle'
import { SearchData } from '../Data/SearchData'
import {Ionicons} from 'react-native-vector-icons'
import FriendList from '../component/FriendList'
import SearchBottom from '../component/SearchBottom'
const SearchScreen = ({navigation}) => {
  return (
    <View style={{paddingTop:15,backgroundColor:'#fff',bottom:8}}>
         <ScrollView>
        <TouchableOpacity  onPress={() => navigation.navigate('Main')}>
       <Ionicons 
               name='arrow-back' 
               size={29}
              marginTop={23}
               />
         </TouchableOpacity>      
         <SearchTop/>
        
         {
          SearchData.map(item => (
            <SearchMiddle data={item}/>
          ))
         }
         
          <View style={styles.Container}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>People you may know</Text>
        </View>
         <FriendList/>
         <SearchBottom/>
         </ScrollView>
         
       
         
    </View>
  )
}

export default SearchScreen
const styles= StyleSheet.create({
  Container:{
    marginLeft:12,
    top:12
},
})