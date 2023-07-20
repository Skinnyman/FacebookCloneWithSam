import { FlatList, ScrollView,StyleSheet,View} from 'react-native'
import React from 'react'
import Subheader from '../component/Subheader'
import Stories from '../component/Stories'
import Post from '../component/Post'
import { Postdata } from '../Data/Postdata'



const HomeScreen = () => {
  return (
    <View  style={styles.Container}>
      <ScrollView>
      <Stories/>
      <FlatList
       data={Postdata}
       renderItem={({item}) =>(
        <Post data={item}/>
       )
      }
      />
      
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Container:{
    bottom:30,
    backgroundColor:'lightgrey'
  }
})

