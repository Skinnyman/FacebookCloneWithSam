import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import {Entypo} from "react-native-vector-icons"


const CreateStories = () => {
  return (
    <View style = {styles.Container}>
       <Image
       source={require('../assets/post4.jpeg')}
       style={styles.story}
       />
       <View style={styles.Icons}>
                <Entypo
                name='plus'
                size={35}
                color='white'
                style={styles.plus}
                />
       </View>
       <View style={styles.sto}>
      <Text style={styles.createStory}>Create Story</Text>
      </View>
    </View>
  )
}

export default CreateStories

const styles = StyleSheet.create({
    story:{
      width:120,
     height:160,
     borderTopRightRadius:20,
     borderTopLeftRadius:20,
    },
    plus:{
        borderRadius:40,
        borderWidth:1,
        width:'90%',
        backgroundColor:'#2c86f5',
        marginLeft:2,
    },
    Container:{
        borderWidth:1,
        borderColor:'lightgrey',
        backgroundColor:'lightgrey',
        alignItems:'center',
        borderRadius:25,
    },
    Icons:{
        position:'absolute',
        top:'70%',
        borderWidth:2,
        backgroundColor:'white',
        borderRadius:30,
        borderColor:'white',
        top:'55%'
    },
    createStory:{
      fontSize:14,
      color:'black',
      textAlign:'center',
      marginTop:25,
     

    },
    sto:{
       marginTop:25,
       width:'40%',
    },
})
