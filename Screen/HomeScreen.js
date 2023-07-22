import { FlatList, ScrollView,StyleSheet,View} from 'react-native'
import React from 'react'
import Stories from '../component/Stories'
import Post from '../component/Post'
import { Postdata } from '../Data/Postdata'
import { FriendData } from '../Data/FriendData'



const HomeScreen = () => {
  return (
    <>
    <ScrollView>
      <View  style={styles.Container}>
      <Stories/>
       {
        Postdata.map(item =>(
         <View key={item.id}>
        <Post data={item}/>
        </View>
        ))
       }
      </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Container:{
    bottom:30,
    backgroundColor:'lightgrey'
  }
})

