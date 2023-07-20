import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from 'react-native-vector-icons'

const Markettopheader = () => {
  return (
    <View>
          <View style={styles.Market}>        
            <Text style={styles.place}>Marketplace</Text>
            <View>
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
    </View>
  )
}

export default Markettopheader

const styles = StyleSheet.create({
    button: {
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        left:35,
        bottom:34, 
      },
      Market:{
       flexDirection:'row',
       justifyContent:'space-around'
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
        right:23,
      },
      place:{
        marginTop:6,
        fontSize:26,
        right:23,
        fontWeight:'bold'
      },
})