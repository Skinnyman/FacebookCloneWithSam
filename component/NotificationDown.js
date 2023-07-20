import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {MaterialIcons,Entypo} from 'react-native-vector-icons'


const NotificationDown = ({data}) => {
  return (
    <View>
          <View style={{backgroundColor:'#cdf6fa',top:37}}>
             <Image
               source={data.postImg}
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
            <Text style={{bottom:50,left:99}}>{data.caption2}</Text>
          </View>
          <View>
            
          </View>
    </View>
  )
}

export default NotificationDown

const styles = StyleSheet.create({
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