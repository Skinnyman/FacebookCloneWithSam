import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'


const ForgetHead = () => {
  return (
    <View>
        <View>
            <Image
            source={require('../assets/save.jpg')}
            style={{width:300,height:300,top:53,left:190}}
            />
        </View>
        <View style={{bottom:300}}>

        
        <View style={styles.Container}>
            <Text style={{fontSize:24,fontWeight:'bold',left:48}}>Forgot Password?</Text>
            <Text style={{paddingLeft:187,right:136,fontSize:15}}>Enter your email address here to recieve further instuctions.</Text>
        </View>    
        <View >
              <Text style={{fontWeight:'bold',marginTop:329,left:69}}>Email Address:</Text>
        </View>
        <View style={styles.email}>
        <TextInput
              placeholder='Enter your email address'
              style={{left:59}}
              />
        </View>
        <View>
            <TouchableOpacity style={styles.send}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
        
        </View>

    </View>
  )
}

export default ForgetHead

const styles = StyleSheet.create({
    Container:{
        top:290,
        left:18
    },
   email:{
     borderWidth:1,
     paddingLeft:9,
     width:"90%",
     padding:13,
     left:19,
     borderRadius:20,
     backgroundColor:'#adb0b3'
   },
   send:{
    left:270,
    top:50,
    borderWidth:1,
    width:80,
    padding:19,
    paddingLeft:19,
    borderRadius:50,
    backgroundColor:'#12b33a'
   }
})