import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import {MaterialIcons,MaterialCommunityIcons} from 'react-native-vector-icons'
const SearchBottom = () => {
  return (
    <View style={{top:80}}>
         <View style={styles.container}>
            <TouchableOpacity style={styles.see}>
                <Text>See All</Text>
            </TouchableOpacity>
            <Text style={{fontSize:19,fontWeight:'bold',right:99}}>More to try on Facebook</Text>
         </View>
         <View style={styles.Container}>
            <TouchableOpacity>
                    <Image
                    source={require('../assets/post10.png')}
                    style={{height:30,width:30}}
                    />
                    <Text style={{fontSize:15,fontWeight:'bold',right:4}}>Saved</Text>
            </TouchableOpacity>
        </View>
           <View style={styles.Container2}>
           <MaterialIcons
                    name='groups'
                    size={25}
                    color='blue'
                    style={styles.group}
                    />
                    <Text style={{top:7,right:8}}>Group</Text>
           </View>
        
        <View>
            <View style={styles.Container3}>
                <TouchableOpacity>
                <MaterialCommunityIcons
                name='youtube-tv'
                size={25}
                color='blue'
                />
                <Text>Videos on Watch</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Container4}>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                    name='storefront'
                    size={25}
                    color='blue'
                    />
                    <Text>Marketplace</Text>
                </TouchableOpacity>
                
            </View>
            
    </View>
    </View>
  )
}

export default SearchBottom

const styles = StyleSheet.create({
    container:{
        left:100,
        bottom:40
       
    },
    see:{
        borderWidth:1,
        bottom:45,
        padding:6,
        bottom:25,
        width:'80%',
        right:60,
        paddingLeft:119,
        borderRadius:10,
        backgroundColor:'#cdd2d4'
    },
    Container:{
        bottom:5,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        right:17,
        left:21,
        top:16
     },
     Container2:{
        bottom:55,
        left:210,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
        height:77
     },
     Container3:{
        bottom:40,
        left:24,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
        
     },
     Container4:{
        bottom:108,
        left:208,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
        
     },
})