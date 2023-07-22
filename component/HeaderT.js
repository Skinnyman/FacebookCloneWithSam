import { View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import {FontAwesome5,Fontisto} from 'react-native-vector-icons'

const headerT = () => {
  return (
    <View style={styles.appBar}>
     
    <View>
        
        <Text style={{fontSize:38,color:'#3a86e9',fontWeight:'bold',bottom:1,left:18,top:7}}>facebook</Text>
        
    </View>
    <View>
        <View style={styles.rating}>
          <View style={styles.searchBg}>
         <TouchableOpacity style={styles.button}>
                <FontAwesome5
                    name='plus'
                    color='black'
                    size={19}
                    style={styles.plus}
                    />
        </TouchableOpacity>   
        </View>  
           
        <View style={styles.searchBg}>      
        <TouchableOpacity style={styles.button}>         
                    <Fontisto
                    name="messenger"
                    color="black"
                    size={25}
                    />
                    
        </TouchableOpacity> 
        </View>  
                
        </View>
    </View>
    
</View>

  )
}

export default headerT

const styles = StyleSheet.create({
  appBar:{
    backgroundColor:'white',
    padding: -5.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:39,
    paddingTop:3,
    

      
  },
  rating:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      margin:15   
  },
  button: {
      alignItems: 'center',
      width: 54,
      height:47,
      justifyContent:'center',
      padding: 10,
    },
    searchBg: {
      backgroundColor:'#e1e3e1',
      height: 35,
      width: 35,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      bottom:1,
      
    },
    
 


  
})
  