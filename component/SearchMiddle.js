import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import {Entypo} from 'react-native-vector-icons'

const SearchMiddle = ({data}) => {
  return (
    <View>
        <View style={styles.Container}>
            <Image
             source={require('../assets/img2.jpeg')}
             style={styles.Pic}
            />
            <Text style={{left:26,top:12,fontSize:16}}>{data.name}</Text>
            <View>
            <Entypo
                          name='dots-three-horizontal'
                          size={25}
                            style={{left:160,top:5}}
                          />
             </View>             
        </View>
     
    </View>
  )
}

export default SearchMiddle

const styles = StyleSheet.create({
    Container:{
     top:85,
     left:15,
     marginBottom:50
    },
    Pic:{
        height:50,
        borderRadius:50,
        width:50
    }
})