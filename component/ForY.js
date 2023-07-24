import { StyleSheet, Text, TouchableOpacity, View ,Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { FontAwesome ,Entypo,Ionicons,AntDesign} from '@expo/vector-icons';
import { Video } from 'expo-av';
import Like from '../assets/like.jpeg';
import Heart from '../assets/heart.jpeg';



const ForY = ({data}) => {
  const [count, setCount] = useState(0);
  const [liked,setliked] = useState(false);
  const handlelike = () => {
    setliked(!liked)
    setCount(prevCount => prevCount + 1);
  }
  const video = React.useRef(null);
  const [status,setStatus] = useState();  
  return (
    <View style={styles.Container}>
        
        <View style={styles.header}>
             <Image
              source={require('../assets/img1.jpeg')}
              style={styles.Pic}
             />
             <Text style={{top:17,left:17}}>{data.name}</Text>
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
        <View>
             <Text style={{left:66,bottom:12}}>{data.caption}</Text>
        </View>
       
     
        {/* Adding Videos to the watch Screen */}
       <View>
         <Video
        ref={video}
        style={styles.video}
        source={data.video}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={setStatus}
        
      />
      <View>
      <View style={styles.Container3}>
       <Image
       source={Like}
       style={styles.Like}
       />
        <Image
       source={Heart}
       style={styles.heart}
       />
       <Text style={{right:127,top:2}}>{count}</Text>
       <Text>78 Comments</Text>
       </View>
       <View style={styles.Container4}>
        <TouchableOpacity onPress={handlelike} > 
        <AntDesign
                name={liked ? 'like1' : 'like2'}
                size={24}
                color = {liked ? 'blue' : 'black'}
                style={{bottom:4,left:7}}
                />
                <Text style={[styles.touchLike,[{color: liked ? 'blue' : 'black'}]]}>Like</Text>
                   
        </TouchableOpacity> 
        <TouchableOpacity style={{paddingLeft:40,right:36}}> 
                <Ionicons
                name='chatbox-outline'
                size={24}
                style={{bottom:4}}
                />
                <Text style={{bottom:28,left:34}}>Comment</Text>
                </TouchableOpacity> 
                <TouchableOpacity>
                <Ionicons
                name='arrow-redo-outline'
                size={24}
                style={{bottom:5,right:49}}
                />
                <Text style={{right:20,bottom:29}}>Share</Text>
                </TouchableOpacity>
       </View>
      </View>
    </View>
         
           
    </View>
  )
}

export default ForY

const styles = StyleSheet.create({
    Container:{
        borderTopWidth:1,
        top:20,
        backgroundColor:'#fff'
      
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
    },
    video: {
      width:'100%',
      height:300,
      left:2,
      bottom:30
    },
    Container4: {
      borderTopWidth:1,
      marginTop:19,
      borderColor:'grey',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10,
      top:12,
      marginHorizontal:12,
    },
    video: {
      width:'100%',
      height:300,
      left:2,
      bottom:1
    },
    Like:{
      width:23,
      height:23,
      borderRadius:50,
      right:19
    },
    Container3:{
      flexDirection:'row',
      top:9,
      justifyContent:'space-around',
    },
    heart:{
      width:23,
      height:23,
      borderRadius:50,
      right:78
    },
    touchLike:{
      left:39,
      bottom:27,
      
    }
})