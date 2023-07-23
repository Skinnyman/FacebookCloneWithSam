import { View, Text ,StyleSheet, ScrollView,TouchableOpacity, Modal} from 'react-native'
import React, { useState } from 'react'
import WatchHeader from '../component/WatchHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForY from '../component/ForY'
import Live from '../component/Live'
import Game from '../component/Game'


const WatchScreen = ({navigation}) => {
     const [visible,setvisible] = useState(false);
     const [see,setsee] = useState(false)
  return (
   
    <View style={styles.Container}>
       <Modal transparent visible={visible}>
          <SafeAreaView style={{flex:1,}}
          onTouchStart={() => setvisible(false)}
          >
               <View>
                    <Live/>
                    
               </View>
          </SafeAreaView>
          
       </Modal>
       <Modal transparent visible={see}>
          <SafeAreaView style={{flex:1}}
          onTouchStart={() => setsee(false)}
          >
               <View>
                    <Game/>

               </View>
          </SafeAreaView>
          
       </Modal>
       <WatchHeader/>
       <View style={styles.Container1}>
            <ScrollView horizontal>

              <TouchableOpacity style={styles.button}>
                   <Text>For you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setvisible(true)}>
                   <Text>Live</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setsee(true)}>
                   <Text>Gaming</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reel')}>
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