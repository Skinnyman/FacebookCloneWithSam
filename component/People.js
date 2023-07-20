import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Picture from '../assets/post4.jpeg'
import { TouchableOpacity } from 'react-native'

const People = ({data}) => {
  return (
    <View style={styles.Go}>
        
        <View style={styles.sad}>
                <Image
                source={data.postImg}
                style={styles.Pic}
                />
                <Text style={styles.Bring}>{data.name}</Text>
                <Image
                 source={data.profileImg}
                 style={styles.Pic2}
                />
                 <Image
                 source={data.secondPic}
                 style={styles.Pic3}
                />
                <Text style={styles.mutual}>{data.caption}</Text>
                <Text style={styles.y}>{data.date}</Text>
        </View>
        <View style={styles.Op}>
                    <TouchableOpacity style={styles.Touch}>
                        <Text style={styles.De1}>Confirm</Text>
                    </TouchableOpacity>
                   
           </View>
           <TouchableOpacity style={styles.Touch1}>
                        <Text style={styles.De}>Delete</Text>
                    </TouchableOpacity>
    </View>
  )
}

export default People

const styles = StyleSheet.create({ 
    Pic:{
       width:100,
       height:99,
       borderRadius:50,
       marginTop:9,
       left:10,
    },
    Pic2:{
       height:29,
       width:28,
       borderRadius:50,
       marginTop:49,
       right:48,
       
    },
    sad:{
       flexDirection:'row'
    },
    Bring:{
       marginTop:20,
       left:24,
    },
    Pic3:{
      height:29,
       width:28,
       borderRadius:50,
       marginTop:49,
       right:39,   
    },
    mutual:{
       marginTop:53,
       right:27,
    },
    y:{
       marginTop:16,
    },
    Op:{
     alignItems:'center',
     flex:1,
    },
    Touch:{
        borderWidth:1,
        padding:15,
        width:120,
        right:34,
        borderRadius:10,
        backgroundColor:'blue',
        height:48
        
    },
    De:{
        left:20,
        
    },
    Touch1:{
        borderWidth:1,
        padding:15,
        width:'29%',
        left:220,
        bottom:51,
        borderRadius:10,
        backgroundColor:'lightgrey',      
    },
    De1:{
        left:20,
        color:'white',
        
         
    },
   
})