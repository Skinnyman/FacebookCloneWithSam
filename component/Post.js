import { View, StyleSheet,Image,Text, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import {Entypo,Ionicons,FontAwesome5,AntDesign} from 'react-native-vector-icons'
import Like from '../assets/like.jpeg';
import Heart from '../assets/heart.jpeg';

const Post = ({data}) => {
  const [count, setCount] = useState(0);
  const [liked, setlike] = useState(false);
  const handlelike = () => {
    setlike(!liked)
    setCount(prevCount => prevCount + 1);
    
  }
 
  
 
  
  return (
  
    <View style={{backgroundColor:'white',marginBottom:11}}>
     
       <View style={styles.Container1}> 
          <Image
          source={data.postImg}
          style={styles.Pic1}
          />
          <Text style={{top:23,right:50}}>{data.name}</Text>
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
       <View style={styles.Container2}>
            <Text style={{right:12}}>{data.date}</Text>
            <Text>.</Text>
            <FontAwesome5
                          name='user-friends'
                          size={15}
                          color='grey'
                          style={{left:12,top:2}}
                          />
       </View>
       <View>
          <Text style={{fontSize:16,left:27,bottom:12}}>{data.caption}</Text>
          <Image
           source={data. profileImg}
           style={{width:'100%'}}
          />
       </View>
       <View style={styles.Container3}>
       <Image
       source={Like}
       style={styles.Like}
       />
        <Image
       source={Heart}
       style={styles.heart}
       />
       <Text style={{right:160,top:2}}>{count}</Text>
       <Text>{data.comments}</Text>
       </View>
       <View style={styles.Container4}>
        <TouchableOpacity onPress={handlelike}  > 
       
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
  )
}

export default Post

const styles = StyleSheet.create({
  Pic1:{
    width:'10%',
    height:40,
    left:12,
    marginTop:19,
    borderRadius:40
  },
  Container1:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  icon:{
    top:19,
    left:39
  },
  icon1:{
    top:19,
    right:19
  },
  Container2:{
  flexDirection:'row',
  marginLeft:79,
  bottom:14,
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
    right:90
  },
  Container4:{
    borderTopWidth:1,
    marginTop:19,
    borderColor:'grey',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    top:12,
    marginHorizontal:12, 
  },
  touchLike:{
    left:39,
    bottom:27,
    
  }
})