import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import People from './People'
import { PictureData } from '../Data/PictureData'

const PeopleK = () => {
  return (
    <View>
        <View style={styles.Co}>
        <Text style={styles.Container}>People You May Know</Text>
        </View>
        {
          PictureData.map(item => (
            <View key={item.id}>
                 <People data={item}/>
             </View> 
          ))
        }
    </View>
  )
}

export default PeopleK

const styles = StyleSheet.create({
    Container:{
       fontSize:17,
       left:13,
       fontWeight:'bold',
       top:6,
       
    },
    Co:{
        borderTopWidth:1,
        top:5,
        borderTopColor:'lightgrey',
    },
})