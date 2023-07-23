import { View, Text ,StyleSheet, ScrollView,TouchableOpacity, Modal} from 'react-native'
import React, { useState } from 'react'
import WatchHeader from '../component/WatchHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForY from '../component/ForY'
import Live from '../component/Live'


const WatchScreen = () => {
     const [visible,setvisible] = useState(true);
  return (
   
    <View style={styles.Container}>
       <Modal transparent visible={visible}>
          <SafeAreaView style={{flex:1,backgroundColor:'red'}}
          onTouchStart={() => setvisible(false)}
          >
               <View>
                    <Live/>
               </View>
          </SafeAreaView>
          
       </Modal>
       <WatchHeader/>
       <View style={styles.Container1}>
            <ScrollView horizontal>

              <TouchableOpacity style={styles.button} >
                   <Text>For you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setvisible(true)}>
                   <Text>Live</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                   <Text>Gaming</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                   <Text>Reels</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                   <Text>Following</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                   <Text>Saved</Text>
              </TouchableOpacity>   
            </ScrollView>
        </View>
        <ForY/>
    </View>
  )
}

export default WatchScreen

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'white'
  
  },
  Container1:{
    flexDirection:'row',
    marginTop:17,
    justifyContent:'space-between',
    
    },
    button:{
      marginLeft:40
        
    },

})