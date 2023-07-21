import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchDown from './SearchDown'
import Searchlower from './Searchlower'

const FriendList = () => {
  return (
    <View style={{marginTop:9}}>
       <ScrollView horizontal style={styles.Container} contentContainerStyle={styles.content}>
        <SearchDown/>
        <Searchlower/>

       </ScrollView>
    </View>
  )
}

export default FriendList

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