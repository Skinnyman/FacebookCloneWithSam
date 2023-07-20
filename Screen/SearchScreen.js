import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import SearchTop from '../component/SearchTop'
import {Ionicons} from 'react-native-vector-icons'
import SearchMiddle from '../component/SearchMiddle'
import { SearchData } from '../Data/SearchData'
import { AntDesign } from '@expo/vector-icons'; 

const SearchScreen = ({navigation}) => {
  return (
    <View>
        <View style={{left:12,top:12}}>
         <TouchableOpacity onPress={() => navigation.navigate("Main")}>
         <AntDesign name="back" size={27} color="black" />
         </TouchableOpacity>
         </View>
         <SearchTop/>
         <FlatList
         data={SearchData}
         renderItem={({item}) =>(
          <SearchMiddle data={item}/>
         )}
         />
         
       
         
    </View>
  )
}

export default SearchScreen