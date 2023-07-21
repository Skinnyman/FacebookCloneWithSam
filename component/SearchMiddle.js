import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import {Entypo} from 'react-native-vector-icons'

const SearchMiddle = ({data}) => {
  return (
    <View style={{bottom:90}}>
        <View style={styles.Container}>
            <Image
             source={data.postImg}
             style={styles.Pic}
            />
            <Text style={{left:26,top:12,fontSize:16}}>{data.name}</Text>
           
        </View>
        <View style={{marginLeft:190,top:45}}>
        <Entypo
                    name='dots-three-horizontal'
                    size={25}
                    style={{left:160,top:5}}
                          />
        </View>
        
    </View>
  )
}

export default SearchMiddle

const styles = StyleSheet.create({
    Container:{
     top:85,
     left:15,
     marginBottom:-9.5,
     flexDirection:'row',
     backgroundColor:'white'
    },
    Pic:{
        height:50,
        borderRadius:50,
        width:50
    }
})