import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { OtherStories } from '../Data/OtherStories'


const FriendStory = () => {
  return (
    <>
    {
         OtherStories.map(item =>(
            <View key ={item.id}>
            <Image
            source={item.storyImg}
            style={styles.friend}
            />
            <Image
            source={item.profileImg}
            style={styles.profile}
            />
           <Text style={styles.ProfileName}>{item.name}</Text>
           
        </View>
         ))
    }
   
    </>
  )
}

export default FriendStory

const styles = StyleSheet.create({
    friend:{
        width:120,
        height:250,
        marginLeft:6,
        borderRadius:20,
    },
    profile:{
        height:40,
        width:40,
        borderRadius:50,
        position:'absolute',
        top:5,
        left:15,
        borderWidth:2,
        borderColor:'blue',
    },
    ProfileName:{
        position:'absolute',
        bottom:14,
        left:28,
        fontSize:14,
        color:'white'
    }
})