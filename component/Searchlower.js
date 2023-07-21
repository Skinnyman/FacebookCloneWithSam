import { StyleSheet, Text, View , Image, ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { FriendData } from '../Data/FriendData'

const Searchlower = () => {
  return (
    <>
      {
        FriendData.map(item =>(
          <View key ={item.id}>
          <View style={styles.Container1} >
            <TouchableOpacity>
          <Image
           source={item.profileImg}
           style={{width:'99%',height:190,marginTop:12,bottom:12,left:1}}
          />
          <View style={{bottom:18}}>
          <Text style={{fontSize:18,top:6,left:4,fontWeight:'bold'}}>{item.name} </Text>
                  <View style={{flexDirection:'row'}}>
                      <Image
                      source={item.storyImg}
                      style={{width:'10%',height:25,left:6,marginTop:12,borderRadius:50}}
                      />
                      <Text style={{left:12,top:12}}>{item.Friend}</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <TouchableOpacity>
                      <Text style={styles.Add}>Add Friend</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={styles.Remove}>Remove</Text>
                  </TouchableOpacity>
                  </View>
          </View> 
          </TouchableOpacity>               
      </View>
      </View>
        ))
      }
        
      
    </>
  )
}

export default Searchlower

const styles = StyleSheet.create({
  Container1:{
    height:337,
    borderWidth:1,
    width:269,
    left:10.0,
    top:36
  
    
    
  },
  Add:{
    left:12,
    top:40,
    borderWidth:1,
    padding:9,
    paddingLeft:12,
    width:120,
    backgroundColor:'#d5edf7'
},
Remove:{
    right:4,
    top:40,
    borderWidth:1,
    padding:9,
    paddingLeft:12,
    width:115,
    backgroundColor:'#cdd2d4'
},
})