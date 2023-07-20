import { View ,ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import CreateStories from './CreateStories'
import FriendStory from './FriendStory'
import Subheader from './Subheader'


const Stories = () => {
  return (
    <View style={{marginTop:9}}>
       <Subheader/>
         <ScrollView horizontal style={styles.Container} contentContainerStyle={styles.content}>
      <CreateStories/>
      <FriendStory/>
      </ScrollView>
    
    
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'white',
        padding:15,
        marginTop:8,
        bottom:24

    },
    content:{
        paddingRight:30,
    }
})