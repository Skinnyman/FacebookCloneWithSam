import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from 'react-native-vector-icons'
const WatchHeader = () => {
  return (
    <View>
        <View style={styles.Container}>
            <Text style={styles.Wa}>Watch</Text>
            <TouchableOpacity style={styles.button1}>
                                        <FontAwesome5
                                        name="user-alt"
                                        size={20}
                                        color="black"
                                        />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                                        <FontAwesome5
                                        name="search"
                                        size={20}
                                        color="black"
                                        />
                </TouchableOpacity>


      </View>
    </View>
  )
}

export default WatchHeader

const styles = StyleSheet.create({
    Wa:{
     top:12,
     left:12,
     fontSize:25,
     fontWeight:'bold'
    },
    button: {
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        right:15,
        marginTop:10, 
      },
      Container:{
       flexDirection:'row',
       justifyContent:'space-between'
      },
      button1:{
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginTop:10, 
        left:95,
      }
})