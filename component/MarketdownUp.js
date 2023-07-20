import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from 'react-native-vector-icons'

const MarketdownUp = () => {
  return (
    <View>
        <View style={styles.Container}>
          <Text style={styles.today}>Today's picks</Text>
          <Ionicons
          name='location-sharp'
          size={25}
          color='blue'
           style={styles.location}
          />
          <Text style={styles.change}>Kumasi,Ghana</Text>
      </View>
    </View>
  )
}

export default MarketdownUp

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent:'space-around'
      },
      change:{
        left:28,
        color:'blue'
      },
      location:{
        left:90
      },
      today:{
         fontSize:16,
         fontWeight:'bold'
      },
})