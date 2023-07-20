import { View, Text ,StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import WatchHeader from '../component/WatchHeader'



const WatchScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
       <WatchHeader/>
       <View style={styles.Container1}>
            <ScrollView horizontal>

              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('For')}>
                   <Text>For you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('live')}>
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