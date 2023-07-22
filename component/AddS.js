import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome ,FontAwesome5,Entypo} from '@expo/vector-icons';

const AddS = () => {
  return (
    <View style={styles.Container}>
     
                <View style={{flexDirection:'row',marginBottom:7,borderBottomWidth:1}}>
                    <TouchableOpacity>
                    <FontAwesome name="pencil-square-o" size={24} color="black"/>
                    <Text style={{left:35,bottom:23}}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginBottom:7,borderBottomWidth:1}}>
                    <TouchableOpacity>
                <FontAwesome5 name="book-open" size={24} color="black" />
                    <Text style={{left:35,bottom:23}}>Story</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection:'row',marginBottom:7,borderBottomWidth:1}}>
                    <TouchableOpacity>
                <Entypo name="youtube" size={24} color="black" />
                    <Text style={{left:35,bottom:23}}>Reel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginBottom:7,borderBottomWidth:1}}>
                    <TouchableOpacity>
                <Entypo name="video-camera" size={24} color="black" />
                    <Text style={{left:35,bottom:23}}>Live</Text>
                    </TouchableOpacity>
                </View>
    </View>
  )
}

export default AddS

const styles = StyleSheet.create({
    Container:{
        bottom:320,
        left:60,
        borderWidth:1,
        padding:7,
        width:'29%',
        paddingLeft:12,
        borderRadius:20,
        backgroundColor:'red'
    }
})