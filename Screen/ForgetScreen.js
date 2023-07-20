import { View, StyleSheet,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import ForgetHead from '../component/ForgetHead'
import {Ionicons} from 'react-native-vector-icons'

const ForgetScreen = ({navigation}) => {
  return (
    <View>
        <View>    
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
       <Ionicons 
               name='arrow-back' 
               size={26}
              marginTop={23}
               />
         </TouchableOpacity>      
        </View>
       <ForgetHead/>
    </View>
  )
}

export default ForgetScreen
const styles = StyleSheet.create({
    Arrow:{
        top:39,
        left:19,
        borderRadius:39,
        borderWidth:1,
        width:27,
        backgroundColor:'white'
    }
})