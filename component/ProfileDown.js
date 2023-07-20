import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {MaterialIcons} from 'react-native-vector-icons'


const ProfileDown = () => {
  return (
    <View>
        <View style={styles.Container}>
            <Text style={{left:12}}>Your shortcuts</Text>
             <Image
               source={require('../assets/img4.jpeg')}
               style={styles.pic}
             />
             <MaterialIcons
             name='people'
             size={25}
             color='blue'
             style={styles.group}
             />
             <Text style={styles.Me}>Mellisah </Text>
             <Text style={styles.Me}>Manoius</Text>
        </View>
        <View style={{bottom:58,left:12}}>
            <Text>All shortcuts</Text>
        </View>
    </View>
  )
}

export default ProfileDown

const styles = StyleSheet.create({
    Container:{
        bottom:78
    },
    pic:{
        width:'16%',
        height:60,
        left:11,
        marginTop:16,
        borderRadius:50
     },
     group:{
        borderWidth:1,
        borderRadius:50,
        width:29,
        height:27,
        marginBottom:11,
        left:23,
        paddingLeft:3,
        position:'absolute',
        top:71,
        left:50,
        backgroundColor:'white',
     },
     Me:{
        left:15,
        top:9,
     }
})