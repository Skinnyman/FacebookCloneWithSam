import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {FontAwesome5,MaterialIcons,Entypo} from 'react-native-vector-icons'

const NotificationTop = () => {
  return (
    <View>
        <View style={styles.Container}>
               <Text style={styles.Noti}>Notifications</Text>
               <TouchableOpacity style={styles.button}>
                                        <FontAwesome5
                                        name="search"
                                        size={20}
                                        color="black"
                                        />
                </TouchableOpacity>
                
        </View>
        <Text style={{top:17,left:11,fontWeight:'bold',fontSize:20}}>New</Text>
          <View style={{backgroundColor:'#d0f2f5',top:29}}>
             <Image
               source={require('../assets/img4.jpeg')}
               style={styles.pic}
             />
             <MaterialIcons
             name='groups'
             size={25}
             color='white'
             style={styles.group}
             />
             <View style={styles.Step}>
                <Text style={styles.letter}>Rose Mary ,Nack Nice and Mary Actress 
                    posted in members of Stephen Adom Kyei Duah</Text>
               <Entypo
                          name='dots-three-horizontal'
                          size={25}
                          style={{right:11,bottom:26}}
                          />
            </View>
            <Text style={{bottom:50,left:99}}>7 minutes ago</Text>

          </View>
          <Text style={{top:17,left:11,fontWeight:'bold',top:35,fontSize:20}}>Earlier</Text>
    </View>
  )
}

export default NotificationTop

const styles = StyleSheet.create({
    button: {
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        left:210,
        bottom:34, 
        top:10
      },
      Container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:12
      },
      Noti:{
        top:11,
        left:11,
        fontSize:25,
        fontWeight:'700'
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
         top:50,
         left:50,
         backgroundColor:'blue'
      },
      Step:{
         flexDirection:'row',
         justifyContent:'space-around',
         bottom:34
      },
      letter:{
        paddingLeft:130,
        right:26,
        bottom:25
      }
})
