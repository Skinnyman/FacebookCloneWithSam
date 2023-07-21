import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {FontAwesome5,Fontisto} from 'react-native-vector-icons'

const ProfileTop = () => {
  return (
    <View style={{marginBottom:89}}>
        <View>
                <Text style={{fontSize:25,fontWeight:'500',top:16,left:15}}>Menu</Text>
                <TouchableOpacity style={styles.button}>
                                        <FontAwesome5
                                        name="search"
                                        size={20}
                                        color="black"
                                        />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                                        <Fontisto
                                        name="player-settings"
                                        size={20}
                                        color="black"
                                        />
                </TouchableOpacity>
                <View style={styles.Sam}>
                    <TouchableOpacity>

                    <Image
                    source={require('../assets/img6.jpeg')}
                    style={styles.pic}
                    />
                    <Text style={styles.Boy1}>Sami Boy</Text>
                    <Text style={styles.Boy}>See your profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                      
                </View>

        </View>
    </View>
  )
}

export default ProfileTop

const styles = StyleSheet.create({
    button: {
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        bottom:15, 
        left:355
      },
      button1:{
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        left:310,
        bottom:49, 
      },
      container:{
      borderBottomWidth:1,
      bottom:89,
      borderBottomColor:'lightgrey'
      },
      pic:{
        width:'11%',
        height:40,
        left:15,
        marginTop:16,
        borderRadius:50,
        bottom:60
     },
     Boy:{
        bottom:105,
        left:75,
     },
     Boy1:{
        bottom:105,
        left:75,
        fontSize:20,
        fontWeight:'bold'
     }
})