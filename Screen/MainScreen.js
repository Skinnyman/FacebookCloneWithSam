import React from 'react'
import HeaderT from '../component/HeaderT'
import Toptab from '../navigation/Toptab'
import { View,StyleSheet,TouchableOpacity } from 'react-native'
import {FontAwesome5,} from 'react-native-vector-icons'


const MainScreen = ({navigation}) => {
  return (
     <>
     
     <View style={{backgroundColor:'white'}}>
      
     
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
  searchBg: {
    backgroundColor:'#e1e3e1',
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    left:288,
    bottom:12
    

  
  },
 
 
 
})