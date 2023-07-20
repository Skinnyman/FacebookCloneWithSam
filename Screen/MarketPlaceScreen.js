import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Markettop from '../component/Markettop'
import Marketdown from '../component/Marketdown'
import Markettopheader from '../component/Markettopheader'
import { Marketdata } from '../component/Marketdata'
import MarketdownUp from '../component/MarketdownUp'

const WatchScreen = () => {
  return (
    <View style={styles.Container}>
      <ScrollView style={styles.Container1}>
         <Markettopheader/>
          <Markettop/>
          <MarketdownUp/>
          
          {
            Marketdata.map(item=>(
              <>
                    <Marketdown data={item}/>
              </>
            )

            )
          }
         
      </ScrollView>
    </View>
  )
}

export default WatchScreen

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'white',
    
  },
  Container1:{
    
  },
})