import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const FriendR = ({data}) => {
  return (
    <View style={{marginVertical:-36,top:15,marginBottom:-50}}>
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
        <View style={styles.Confirm}>
                    <TouchableOpacity style={styles.Touch}>
                        <Text style={styles.De1}>Confirm</Text>
                    </TouchableOpacity>
                   
           </View>
           <View style={{bottom:19}}>
                    <TouchableOpacity style={styles.Touch1}>
                                    <Text style={styles.De}>Delete</Text>
                                </TouchableOpacity>
            </View> 
    </View>
  )
}

export default FriendR

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
       fontWeight:'bold'
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
    Confirm:{
     alignItems:'center',
     bottom:21
    },
    Touch:{
        borderWidth:1,
        padding:15,
        width:120,
        right:34,
        borderRadius:10,
        backgroundColor:'blue',
        height:39,
        padding:7
        
    },
    De:{
        left:20,
        
    },
    Touch1:{
        borderWidth:1,
        padding:15,
        width:'29%',
        left:250,
        bottom:51,
        borderRadius:10,
        backgroundColor:'lightgrey', 
        height:39,
        padding:7 ,
        marginTop:12,   
    },
    De1:{
        left:20,
        color:'white',
        
         
    },
   
})