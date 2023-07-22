import { View, Text ,StyleSheet, ScrollView, FlatList} from 'react-native'
import React from 'react'
import NotificationTop from '../component/NotificationTop'
import NotificationDown from '../component/NotificationDown'
import { Notidata } from '../Data/Notidata'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
       <NotificationTop/>
        {
         Notidata.map(item=>(
            <View key={item.id}>
             <NotificationDown data={item}/>
             </View>
        
        ))
      } 
      </ScrollView>
      
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white'
  }
})