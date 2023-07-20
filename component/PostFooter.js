 import { StyleSheet, Text, View,Image } from 'react-native'
 import React from 'react'
 import Like from '../assets/like.jpeg';
 import Shock from '../assets/shock.jpeg';
 import Heart from '../assets/heart.jpeg';
 import {AntDesign,Ionicons} from 'react-native-vector-icons'

 const PostFooter = ({data}) => {
   return (
     <View style={styles.Length}>
         <View style={styles.Edit}>
       <Image
       source={Like}
       style={styles.Container}
       />
       <Image
       source={Shock}
       style={styles.Container}
       />
       <Image
       source={Heart}
       style={styles.Container}
       />
       <Text style={{left:7,marginTop:14}}>{data.reaction}</Text>
       <Text style={styles.Letter}>23 Comments</Text>
       </View>
       <View style={styles.message}>
                <AntDesign
                name='like2'
                size={24}
                />
                <Text style={{right:20}}>Like</Text>
                <Ionicons
                name='chatbox-outline'
                size={24}
                />
                <Text style={{right:20}}>Comment</Text>
                <Ionicons
                name='arrow-redo-outline'
                size={24}
                />
                <Text style={{right:7}}>Share</Text>
       </View>
     </View>
   )
 }

 export default PostFooter

 const styles = StyleSheet.create({
     Container:{
        width:29,
        height:26,
        marginTop:10,
        
     },
     Edit:{
       flexDirection:'row',
       borderBottomWidth:1,
       marginTop:2,
       paddingBottom:15,
       borderBottomColor:'lightgrey'
     },
     Letter:{
      left:167,
      marginTop:11,
     
     },
     Length:{ 
       borderBottomWidth:4,
       borderBottomColor:'lightgrey',
      

     },
     message:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15,
     },
 })
