import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Video } from 'expo-av';
import Like from '../assets/like.jpeg';
import Heart from '../assets/heart.jpeg';
import {Entypo,Ionicons,FontAwesome5,AntDesign} from 'react-native-vector-icons'


const VideoS = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const video = React.useRef(null);
  const [status,setStatus] = useState(); 
  return (
    <View>
         <Video
        ref={video}
        style={styles.video}
        source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
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
        <TouchableOpacity onPress={onPress} > 
       <AntDesign
                name='like2'
                size={24}
                style={{bottom:4,left:9}}
                />
              <Text style={{left:39,bottom:27}}>Like</Text>
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
  )
}

export default VideoS

const styles = StyleSheet.create({
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
  
})