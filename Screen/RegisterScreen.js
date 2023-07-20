import { View,Image,StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import {Ionicons} from 'react-native-vector-icons'
import { useState } from "react"

const RegisterScreen = ({navigation}) => {
  const [fullname,setFullname] = useState('');
  const [Mobile,setMobile] = useState('');
  const [Password,setPassword] = useState('');
  const [CPass,setCpass] = useState('');
  return (
    
    <View style={{flex:1}}>
      <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
       <Ionicons 
               name='arrow-back' 
               size={26}
              marginTop={23}
               />
         </TouchableOpacity>      
        <View>
          
              <Image
               source={require('../assets/logo.png')}
               style={{width:55,height:55,marginTop:90,marginLeft:160}}
              />
              <TextInput
                  placeholder="Full Name"
                  value={fullname}
                  onChangeText={value => setFullname(value)}
                  style={styles.inputBox}
               />
                <TextInput
                  placeholder="Mobile number or email"
                  value={Mobile}
                  onChangeText={value => setMobile(value)}
                  style={styles.inputBox1}
               />
               <TextInput
                  placeholder="Password"
                  value={Password}
                  onChangeText={value => setPassword(value)}
                  style={styles.inputBox1}
               />
               <TextInput
                  placeholder="Confirm Password"
                  value={CPass}
                  onChangeText={value => setCpass(value)}
                  style={styles.inputBox1}
               />
               <TouchableOpacity style={styles.Account} onPress={() => navigation.navigate('Main')}>
               <Text  style={styles.create}>Create Account</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.Already}>
               <Text  style={styles.red}>Already have an account</Text>
               </TouchableOpacity>
               <Image
                    source={require('../assets/meta-logo.png')} style={{height:57,width:100,marginLeft:120}}
                    />
        </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  inputBox:{
    borderWidth:2,
    borderRadius:12,
    padding:10,
    borderColor:'grey',
    marginLeft:5,
    marginTop:25,
    width:'90%'
  },
  inputBox1:{
    borderWidth:2,
    borderRadius:12,
    padding:10,
    borderColor:'grey',
    marginLeft:5,
    marginTop:25,
    width:'90%'
  },
  Account:{
    borderWidth:1,
    borderColor:'blue',
    backgroundColor:'blue',
    borderRadius:40,
    width:'90%',
    marginLeft:9,
    marginTop:20,
    padding:12,
  },
  create:{
      fontSize:14,
      textAlign:'center',
      color:'white',
      fontWeight:'500',
  },
  Already:{
    borderWidth:1,
    borderColor:'blue',
    alignItems:'center',
    marginRight:10,
    marginLeft:12,
    marginTop:70,
    borderRadius:20,
    padding:10,
    width:'90%',
  },
  red:{
    color:'blue',
    fontSize:12,
    fontWeight:'400'
  }
})