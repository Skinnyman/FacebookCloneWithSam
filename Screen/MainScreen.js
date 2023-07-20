import React from 'react'
import HeaderT from '../component/HeaderT'
import Toptab from '../navigation/Toptab'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import {FontAwesome5,} from 'react-native-vector-icons'


const MainScreen = ({navigation}) => {
  return (
     <>
     
     <View style={styles.Container}>
      <View style={{padding:2,top:13,borderWidth:2,width:'101%',borderColor:'black',marginBottom:20,backgroundColor:'black',height:60,right:4}}>
              <Text style={{color:"white",fontSize:19,top:19,left:19}}>Data Mode</Text>
              <TouchableOpacity style={{borderWidth:1,borderColor:'white',width:120,padding:6,paddingLeft:40,left:250,bottom:23}}>
                <Text style={{color:'white'}}>Switch modes</Text>
              </TouchableOpacity>
      </View>
     
     <HeaderT/>
     <View style={styles.searchBg}> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                    <FontAwesome5
                    name="search"
                    size={25}
                    color="black"
                    />
        </TouchableOpacity>
        </View>   
    
     </View>
     <Toptab/>
     
     
      
     </>
     
  )
}

export default MainScreen
const styles = StyleSheet.create({
  Container:{
   top:48,
   borderColor:"white",
   backgroundColor:'white'
   
  },
  searchBg: {
    backgroundColor:'lightgrey',
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    bottom:95,
    left:220,
    

  
  },
 
 
 
})