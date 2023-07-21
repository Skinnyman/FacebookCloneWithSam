import { View,Image,StyleSheet,TextInput,TouchableOpacity,Text,Button} from "react-native"

import { useState } from "react"


const LoginScreen= ({navigation}) =>{
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');
     
    return(
          <View style={{marginTop:24,backgroundColor:'#fff',paddingTop:39}}>
               <View style={styles.Container}>
               <Image
                 source={ require('../assets/logo.png')} 
                 style={{width:58,height:58,marginLeft:150}}  
               />
                <TextInput
                  placeholder="Mobile number or email"
                  value={email}
                  onChangeText={value => setEmail(value)}
                  style={styles.inputBox}
               />
               <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={value => setPassword(value)}
                  style={styles.inputBox2}
               />
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main')} >
                        <Text style={styles.Login} >Login</Text>
                    </TouchableOpacity>
                      
                    <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                        <Text style={styles.pass} >Forgot password?</Text>
                    </TouchableOpacity>
                     <View style={{marginTop:90}}>
                    <TouchableOpacity style={styles.Account} onPress={() => navigation.navigate('Register')}>
                           
                        <Text style={styles.accountText}>Create a new account</Text>
                    </TouchableOpacity>
                    </View>
                    <Image
                    source={require('../assets/meta-logo.png')} style={{height:57,width:100,marginLeft:120,marginTop:17}}
                    />

               </View>
          </View>
    )
}

const styles = StyleSheet.create({
  Container:{
   marginTop:164,
   marginLeft:1,    
  },
  inputBox:{
    borderWidth:2,
    borderRadius:12,
    padding:10,
    borderColor:'grey',
    marginLeft:5,
    marginTop:25,
    width:'90%'
  },
  inputBox2:{
    borderWidth:2,
    borderRadius:12,
    padding:10,
    borderColor:'grey',
    marginLeft:5,
    marginTop:25,
    width:'90%'
  },
  loginButton:{
    borderWidth:1,
    borderColor:'lightblue',
    alignItems:'center',
    marginRight:100,
    marginLeft:13,
    marginTop:15,
    backgroundColor:'blue',
    borderRadius:200,
    padding:10,
    width:'90%',
    height:50,
    paddingRight:27

  },
  Login:{
    color:'white',
    fontSize:16,
    fontWeight:'500'
  },
  pass:{
    fontSize:16,
    marginLeft:99,
    marginTop:20,
    fontWeight:'400'
  },
  Account:{
    borderWidth:1,
    borderColor:'blue',
    alignItems:'center',
    marginRight:10,
    marginLeft:12,
    marginTop:50,
    borderRadius:20,
    padding:10,
    width:'90%',
    
  },
  accountText:{
    color:'blue',
    fontSize:14,
    fontWeight:400,
  }
  
})

export default LoginScreen
