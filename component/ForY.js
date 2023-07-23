import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { FontAwesome ,Entypo,Ionicons} from '@expo/vector-icons';

const ForY = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.header}>
             <Image
              source={require('../assets/img1.jpeg')}
              style={styles.Pic}
             />
             <Text style={{top:17,left:17}}>Agwa Eni .</Text>
             <TouchableOpacity>
                 <Text style={{top:17,left:18,color:'#102aad'}}>Follow</Text>
             </TouchableOpacity>
        </View>
        <View style={styles.Header2}>
            <Text style={{left:25,bottom:12}}> 2 Mar .</Text>
            <FontAwesome name="globe" 
            size={24} 
            color="grey"
            style={{bottom:15,right:19}}
             />
            <Entypo
                          name='dots-three-horizontal'
                          size={25}
                          style={styles.icon}
                          />
               <Ionicons
                          name='close'
                          size={25}
                          color='grey'
                          style={styles.icon1}
                          />            
        </View>
               
    </View>
  )
}

export default ForY

const styles = StyleSheet.create({
    Container:{
        borderTopWidth:1,
        top:23,
      
    },
    Pic:{
      width:'16%',
      height:56,
      top:12,
      left:12,
      borderRadius:30
    },
    header:{
      flexDirection:'row'
    },
    Header2:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    icon:{
      bottom:34,
      left:89
    },
    icon1:{
      left:42,
      bottom:35
    }
})