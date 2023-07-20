import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5,FontAwesome,Ionicons} from 'react-native-vector-icons'

const Markettop = () => {
  return (
    <View>
        <View style={styles.sell}>
            <TouchableOpacity style={styles.touch}>
                 <FontAwesome
                 name="pencil-square-o"
                 size={25}
                 style={styles.cat}
                 />
                    <Text style={styles.pen}>Sell</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
                    <Ionicons
                    name='list'
                    size={25}
                    style={styles.cat}
                    />
                    <Text style={styles.pen}>Categories</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bend}>

        </View>
    </View>
  )
}

export default Markettop

const styles = StyleSheet.create({
      sell:{
       flexDirection:'row',
       justifyContent:'space-around',
    
      },
      pen:{
        left:59,
        bottom:16
      },
      touch:{
        borderWidth:1,
        width:"43%",
        borderRadius:40,
        backgroundColor:'lightgrey',
        bottom:25,
        
      },
      cat:{
        top:8,
        left:23,
      },
      bend:{
        borderBottomWidth:1,
        bottom:11,
        borderBottomColor:'lightgrey'
      }
})
