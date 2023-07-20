import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from 'react-native-vector-icons'


const SubFriend = () => {
  return (
    <View >
        <View style={styles.Container}>
                  <Text style={styles.Nat}>Friends</Text>
                    <View style={styles.Search}>
                        <TouchableOpacity style={styles.button}>
                                        <FontAwesome5
                                        name="search"
                                        size={20}
                                        color="black"
                                        />
                            </TouchableOpacity>

                    </View>
        </View>
         <View style={styles.Ed}>
                     <TouchableOpacity>
                                     <Text style={styles.Friends}>Suggestions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                             <Text style={styles.Friend}>Your Friends</Text>
                    </TouchableOpacity>
         </View>
         <View style={styles.Brook}>

         </View>
         <View style={styles.Pan1}>
         <Text style={styles.Pan}>Friend Requests</Text>
          <Text style={styles.Num}>3</Text>
          <TouchableOpacity>
                   <Text style={styles.See}>See All</Text>
             </TouchableOpacity>
         </View>
    </View>
  )
}

export default SubFriend

const styles = StyleSheet.create({
    Container:{
    flexDirection:'row',
    justifyContent:'space-between'
    },
    Nat:{
    fontSize:25,
    fontWeight:'500',
    left:24,
    marginTop:10,
   
    
    },
    button: {
        backgroundColor:'lightgrey',
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        right:15,
        marginTop:10,
       
      },
      Friends:{
          marginTop:7,
          right:27,
          borderWidth:1,
          width:120,
          height:40,
          borderRadius:40,
          fontSize:17,
          padding:5,
          backgroundColor:'lightgrey'
          
      },
      Ed:{
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
      Friend:{
         right:50,
         marginTop:7,
         borderWidth:1,
          width:120,
          height:40,
          borderRadius:40,
          fontSize:17,
          padding:5,
          backgroundColor:'lightgrey'
      },      
      Pan1:{
      flexDirection:'row'
    },
    Pan:{
      fontSize:19,
      marginTop:8,
      left:23,
     },
     Num:{
      color:'red',
      fontSize:20,
      left:25,
      marginTop:7,
      fontWeight:'bold'
     },
     See:{
      left:170,
      color:'blue',
      fontSize:17,
      marginTop:10,
   },
})