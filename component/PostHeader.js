import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import {Entypo,Ionicons,FontAwesome5} from 'react-native-vector-icons'
const PostHeader = ({data}) => {
  return (
    <View >
      <View style={styles.Box} >
                 <Image
                  source={data.postImg}
                  style={styles.Container}
                  />
                  <Text style={{left:50}}>{data.name}</Text>
                  <View style={styles.Close}> 
                        <Entypo
                          name='dots-three-horizontal'
                          size={25}
                          
                          />
                        <Ionicons
                          name='close'
                          size={25}
                          color='grey'
                          style={{left:8}}
                          />
                    </View>
                    <View style={styles.Nav}>

                          <Text style={{left:7}}>{data.date}</Text>
                          <Text style={styles.dot}>.</Text>
                          <FontAwesome5
                          name='user-friends'
                          size={15}
                          color='grey'
                          style={{left:13}}
                          />
                  </View>
                  <View style={styles.Every}>
                     <Text style={styles.Word}>{data.caption}</Text>
                  </View>
           </View>
           
    </View>
  )
}

export default PostHeader
const styles = StyleSheet.create({
    Container:{
       width:40,
       height:40,
       borderRadius:50,
       borderWidth:10,
       marginTop:6,
       paddingHorizontal:5,
       left:3,
       
       
    },
    Box:{
      flexDirection:'row',
      marginLeft:21,
      justifyContent:'space-around',
      marginRight:70,
     
    },
    Nav:{
      flexDirection:'row',
      marginTop:25,
      right:2,
      paddingHorizontal:9,
        
      
    },
    Word:{
      marginTop:50,
      right:30,
    },
    Close:{
       flexDirection:'row',
       left:240
       
    },
    dot:{
        left:10,
    },
})