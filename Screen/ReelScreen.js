import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons,FontAwesome5,FontAwesome,Entypo  } from 'react-native-vector-icons'
const ReelScreen = () => {
  return (
    <View >
       <View style={styles.container}>
       <TouchableOpacity >
       <Ionicons 
               name='arrow-back' 
               size={29}
               color='white'
                style={{top:18}}
               />
         </TouchableOpacity>      
      </View>
      <View style={styles.top}>
         <View style={styles.camera}>
            <TouchableOpacity style={{flexDirection:'row'}}>
                  <Text style={{left:68}}>Create</Text>
                  <FontAwesome5 name="camera" size={24} color="black"
                  style={{right:19}}
                   />
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
             <FontAwesome name="search" size={29} color="white" 
             style={{right:36,top:8,}}
             />

        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,width:36,right:18,borderRadius:50,height:34,backgroundColor:'black',top:6}}>
        <Entypo name="circle" size={24} color="white"
         style={{right:-5,top:5}}
         />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ReelScreen
const styles = StyleSheet.create({
 container:{
  top:17,
  left:19
 },
 top:{
  flexDirection:'row',
  justifyContent:'flex-end',

 },
 camera:{
  right:60,
  borderWidth:1,
  width:'33%',
  padding:9,
  paddingLeft:-30.6,
  borderRadius:40,
  backgroundColor:'#fff'
  

 }
}) 