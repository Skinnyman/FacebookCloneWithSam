import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import  {useState}from 'react'
import {MaterialIcons,MaterialCommunityIcons,FontAwesome5,Entypo} from 'react-native-vector-icons'

const ProfileBottom = () => {
    const [shouldShow,setshouldShow] =useState(false);
    
  return (
    <View style={{ backgroundColor:'white',marginBottom:50}}> 
        <View style={{bottom:200}}>
        <View style={styles.Container}>
            <TouchableOpacity>
                    <Image
                    source={require('../assets/post10.png')}
                    style={{height:30,width:30}}
                    />
                    <Text style={{fontSize:15,fontWeight:'bold',right:4}}>Saved</Text>
            </TouchableOpacity>
        </View>
           <View style={styles.Container2}>
           <MaterialIcons
                    name='groups'
                    size={25}
                    color='white'
                    style={styles.group}
                    />
                    <Text style={{top:28,right:13}}>Groups</Text>
           </View>
        
        <View>
            <View style={styles.Container3}>
                <TouchableOpacity>
                <MaterialCommunityIcons
                name='youtube-tv'
                size={25}
                color='blue'
                />
                <Text>Videos on Watch</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Container4}>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                    name='storefront'
                    size={25}
                    color='blue'
                    />
                    <Text>Marketplace</Text>
                </TouchableOpacity>
            </View>
            {
                shouldShow ? (
                    <View style={styles.Container5}>
                    <TouchableOpacity>
                        <FontAwesome5
                        name='user-friends'
                        size={25}
                        color='blue'
                        />
                        <Text>Friends</Text>
                    </TouchableOpacity>
                </View>
                ) : null
            }
            {
                 shouldShow ?(
                    <View style={styles.Container6}>
                    <TouchableOpacity>
                        <FontAwesome5
                        name='business-time'
                        size={25}
                        color='blue'
                        />
                        <Text>Feeds</Text>
                    </TouchableOpacity>
                </View>
                 ) : null
            }
            
            {
                 shouldShow ?(
            <View style={styles.Container7}>
                <TouchableOpacity>
                    <Image
                      source={require('../assets/Da.jpg')}
                      style={{height:30,width:30,borderRadius:60}}
                    />
                    <Text>Crisis Response</Text>
                </TouchableOpacity>
            </View>
            ) : null
        }
        {
                 shouldShow ?(
            <View style={styles.Container8}>
                <TouchableOpacity>
                    <Image
                      source={require('../assets/download.png')}
                      style={{height:30,width:'10%',borderRadius:50}}
                    />
                    <Text>Avatars</Text>
                </TouchableOpacity>
            </View>
            ) : null
        }
         {
                 shouldShow ?(
            <View style={styles.Container9}>
                <TouchableOpacity>
                   <MaterialIcons
                    name='event-busy'
                    size={25}
                   />
                    <Text>Events</Text>
                </TouchableOpacity>
            </View>
             ) : null
            }
             {
                 shouldShow ?(
            <View style={styles.Container10}>
                <TouchableOpacity>
                   <FontAwesome5
                    name='gamepad'
                    size={25}
                    color='blue'
                   />
                    <Text>Gaming</Text>
                </TouchableOpacity>
            </View>
             ) : null
            }
            {
                 shouldShow ?(
            <View style={styles.Container11}>
                <TouchableOpacity>
                   <MaterialCommunityIcons
                    name='medal'
                    size={25}
                    color='yellow'
                   />
                    <Text>Fantasy games</Text>
                </TouchableOpacity>
            </View>
             ) : null
            }
             {
                 shouldShow ?(
            <View style={styles.Container12}>
                <TouchableOpacity>
                   <Entypo
                    name='back-in-time'
                    size={25}
                    color='blue'
                   />
                    <Text>Memories</Text>
                </TouchableOpacity>
            </View>
             ) : null
            }
            
            {
                 shouldShow ?(
            <View style={styles.Container13}>
                <TouchableOpacity>
                   <MaterialCommunityIcons
                    name='flag'
                    size={25}
                    color='red'
                   />
                    <Text>Pages</Text>
                </TouchableOpacity>
            </View>
             ) : null
            }
            {
                 shouldShow ?(
            <View style={styles.Container14}>
                <TouchableOpacity>
                   <MaterialCommunityIcons
                    name='facebook-messenger'
                    size={25}
                    color='green'
                   />
                    <Text>Pages</Text>
                </TouchableOpacity>
            </View>
             ) : null
            }
             {
                 shouldShow ?(
            <View style={styles.Container15}>
                <TouchableOpacity>
                   <MaterialCommunityIcons
                    name='youtube'
                    size={25}
                    color='red'
                   />
                    <Text>Reels</Text>
                </TouchableOpacity>
            </View>
            ) : null
        }   
        </View>
        
        </View>
      
         <View style={{marginBottom:12}}>
        
          </View>
    
          <View>
          <TouchableOpacity style={styles.See} onPress={() => setshouldShow(!shouldShow)}>
            <Text style={{left:14,color:'white'}}>See Less / See More </Text>
          </TouchableOpacity>
            </View>
          
    </View>
  )
}

export default ProfileBottom

const styles = StyleSheet.create({
    group:{
        borderWidth:1,
        borderRadius:50,
        width:29,
        height:27,
        marginBottom:11,
        paddingLeft:3,
        position:'absolute',
        backgroundColor:'blue',
        left:18,
        top:10
     },
     Container:{
        bottom:5,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        right:17,
        left:21,
        top:16
     },
     Container2:{
        bottom:55,
        left:210,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
        height:77
     },
     Container3:{
        bottom:40,
        left:24,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
        
     },
     Container4:{
        bottom:108,
        left:208,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
        
     },
     Container5:{
        bottom:100,
        left:28,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,   
     },
     Container6:{
        bottom:169,
        left:210,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
     },
     Container7:{
        bottom:166,
        left:28,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,   
     },
     Container8:{
        bottom:240,
        left:210,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
     },
     Container9:{
        bottom:232,
        left:28,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,   
     },
     Container10:{
        bottom:301,
        left:213,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
     },
     Container11:{
        bottom:295,
        left:28,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,   
     },
     Container12:{
        bottom:362,
        left:213,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
     },
     Container13:{
        bottom:359,
        left:28,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,   
     },
     Container14:{
        bottom:426,
        left:213,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,
     },
     Container15:{
        bottom:420,
        left:28,
        borderWidth:1,
        width:'45%',
        padding:11,
        paddingLeft:20,
        borderRadius:12,
        paddingLeft:23,   
     },
     See:{
        borderWidth:1,
        paddingLeft:116,
        width:'70%',
        left:59,
        padding:8,
        borderRadius:40,
        backgroundColor:'#689ff7',
        paddingLeft:63,
        marginBottom:200,
        bottom:270
    },
})