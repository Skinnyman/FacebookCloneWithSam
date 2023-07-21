import { View, Text, TouchableOpacity, FlatList, ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import SearchTop from '../component/SearchTop'
import SearchMiddle from '../component/SearchMiddle'
import { SearchData } from '../Data/SearchData'
import { AntDesign } from '@expo/vector-icons'; 
import SearchDown from '../component/SearchDown'
import Searchlower from '../component/Searchlower'

const SearchScreen = ({navigation}) => {
  return (
    <ScrollView style={{paddingTop:15,backgroundColor:'#fff'}}>
        
         <TouchableOpacity onPress={() => navigation.navigate("Main")}>
         <AntDesign name="back" size={27} color="black" />
         </TouchableOpacity>
        
         <SearchTop/>
         <FlatList
         data={SearchData}
         renderItem={({item}) =>(
          <SearchMiddle data={item}/>
         )}
         />
          <View style={styles.Container}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>People you may know</Text>
        </View>
         <SearchDown/>
         <Searchlower/>
         
       
         
    </ScrollView>
  )
}

export default SearchScreen
const styles= StyleSheet.create({
  Container:{
    marginLeft:12,
    top:12
},
})