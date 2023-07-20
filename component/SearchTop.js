import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchTop = () => {
  return (
    <View>
        <View>
            <TextInput
             placeholder='Search'
             style={styles.Container}
            />
        </View>
        <View style={{borderBottomWidth:1,top:30,borderBottomColor:'grey'}}>
           <View style={{top:39,flexDirection:'row',justifyContent:'space-around'}}>
               <Text style={{right:47,fontSize:20,fontWeight:'bold'}}>Recent</Text>
               <TouchableOpacity>
                 <Text style={{left:55,top:4,fontSize:16,color:'blue'}}>See all</Text>
               </TouchableOpacity>
           </View>
        </View>
    </View>
  )
}

export default SearchTop

const styles = StyleSheet.create({
    Container:{
        left:69,
        top:49,
        borderWidth:1,
        width:"80%",
        borderRadius:40,
        padding:6,
        paddingLeft:16,
        backgroundColor:'#ebebeb',

    }
})