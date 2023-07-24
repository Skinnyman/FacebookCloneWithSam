import { View,Text,TouchableOpacity,StyleSheet, Modal,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import {FontAwesome5,Fontisto} from 'react-native-vector-icons'
import { FontAwesome ,Entypo} from '@expo/vector-icons';




const headerT = () => {
  const [visible,setvisible] = useState(false);
  const toggleModal = () => {
    setvisible(!visible);
}
  return (
    <View style={styles.appBar}>

      {/* The Modal component is a basic way to present content above an enclosing view */}

     <Modal  animationType='fade' transparent visible={visible} onBackdropPress={toggleModal}>
                <SafeAreaView style={{flex:1}} >
                    <View>
                      <View style={styles.searchBg2}>
                              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                                <FontAwesome5
                                    name='plus'
                                    color='black'
                                    size={19}
                                    style={styles.plus}
                                    />
                                </TouchableOpacity> 
                </View>  
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
                    </View>

                </SafeAreaView>
     </Modal>
    <View>
        
        <Text style={{fontSize:38,color:'#3a86e9',fontWeight:'bold',bottom:1,left:18,top:7}}>facebook</Text>
        
    </View>
    <View>
        <View style={styles.rating}>
          <View style={styles.searchBg}>
         <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <FontAwesome5
                    name='plus'
                    color='black'
                    size={19}
                    style={styles.plus}
                    />
        </TouchableOpacity>   
        </View>  
        <View style={styles.searchBg1}>      
        <TouchableOpacity style={styles.button}>         
                    <Fontisto
                    name="messenger"
                    color="black"
                    size={25}
                    />
                    
        </TouchableOpacity> 
        </View>      
        </View>
        
    </View>
    
</View>

  )
}

export default headerT

const styles = StyleSheet.create({
  appBar:{
    backgroundColor:'white',
    padding: -5.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:39,
    paddingTop:3,   
  },
  rating:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      margin:15   
  },
  button: {
      alignItems: 'center',
      width: 54,
      height:47,
      justifyContent:'center',
      padding: 10,
    },
    searchBg: {
      backgroundColor:'#e1e3e1',
      height: 35,
      width: 35,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      bottom:1,  
      right:27
    },
    searchBg1:{
      backgroundColor:'#e1e3e1',
      height: 35,
      width: 35,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      bottom:1,  
    },
    Container:{
      left:240,
      borderWidth:1,
      padding:7,
      width:'37%',
      paddingLeft:12,
      borderRadius:20,
      backgroundColor:'white',
      top:29
  },
  searchBg2:{
    backgroundColor:'#e1e3e1',
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    bottom:1, 
    left:252,
    top:23
  },
    
 


  
})
  