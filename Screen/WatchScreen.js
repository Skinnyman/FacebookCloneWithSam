import { View, Text ,StyleSheet, ScrollView,TouchableOpacity,Modal} from 'react-native'
import React, { useState } from 'react'
import WatchHeader from '../component/WatchHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForY from '../component/ForY'
import Live from '../component/Live'
import Game from '../component/Game'
import { WatchData } from '../Data/WatchData'


const WatchScreen = ({navigation}) => {
     const [visible,setvisible] = useState(false);
     const [see,setsee] = useState(false);
     const toggleModal = () => {
            setvisible(!visible)
     }
  return (
   
    <View style={styles.Container}>
        <Modal transparent visible={visible} onBackdropPress={toggleModal}>
          <SafeAreaView style={{flex:1}}
          >
                <TouchableOpacity onPress={toggleModal}>
                    <Text style={{textAlign:'center',top:203,right:52}}>Live</Text>
                </TouchableOpacity>
               <View>
                    <Live/>
                    
               </View>
          </SafeAreaView>
          
       </Modal>
       {/* <Modal transparent visible={see}>
          <SafeAreaView style={{flex:1}}
          onTouchStart={() => setsee(false)}
          >
               <View>
                    <Game/>

               </View>
          </SafeAreaView>
          
       </Modal>  */}
       <ScrollView>
       <WatchHeader/>
       <View style={styles.Container1}>
            <ScrollView horizontal>

              <TouchableOpacity style={styles.button}>
                   <Text>For you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
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
       
        {
          WatchData.map(item =>(
               <View key={item.id}>
                     <ForY data={item}/>
               </View>

          ))
        }
        </ScrollView>
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