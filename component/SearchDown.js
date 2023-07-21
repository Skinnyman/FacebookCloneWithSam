import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const SearchDown = () => {
  return (
    <View>
        <Text style={{marginTop:17,bottom:20,fontSize:23,fontWeight:'bold'}}>People you may know</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
        <View style={styles.Container1}>
            <Image
             source={require('../assets/img1.jpeg')}
             style={{width:'99%',height:190,marginTop:13,bottom:12,left:1}}
            />
            <View style={{bottom:18}}>
            <Text style={{fontSize:18,top:6,left:4,fontWeight:'bold'}}>Fosu Samuel</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image
                        source={require('../assets/img1.jpeg')}
                        style={{width:'10%',height:25,left:6,marginTop:12,borderRadius:50}}
                        />
                        <Text style={{left:12,top:12}}>1 mutual friend</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity>
                        <Text style={styles.Add}>Add Friend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.Remove}>Remove</Text>
                    </TouchableOpacity>
                    </View>
            </View>                
        </View>

        </TouchableOpacity>
        </View>  
        
  </View>
    
  )
}

export default SearchDown

const styles = StyleSheet.create({
    Container1:{
      height:337,
      borderWidth:1,
      width:269,
      marginLeft:11,
      bottom:12
    },
    Add:{
        left:12,
        top:40,
        borderWidth:1,
        padding:9,
        paddingLeft:12,
        width:120,
        backgroundColor:'#d5edf7'
    },
    Remove:{
        right:4,
        top:40,
        borderWidth:1,
        padding:9,
        paddingLeft:12,
        width:115,
        backgroundColor:'#cdd2d4'
    },
})