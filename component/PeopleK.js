import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import People from './People'
import { PictureData } from '../Data/PictureData'

const PeopleK = () => {
  return (
    <View>
        <View style={styles.Co}>
        <Text style={styles.Container}>People You May Know</Text>
        </View>
        <FlatList
        data={PictureData}
        renderItem={({item}) => (
          <People data={item}/>
        )}
        />
    </View>
  )
}

export default PeopleK

const styles = StyleSheet.create({
    Container:{
       fontSize:17,
       left:13,
       fontWeight:'bold',
       top:20,
       
    },
    Co:{
        borderTopWidth:1,
        bottom:23,
        borderTopColor:'lightgrey'
    },
})