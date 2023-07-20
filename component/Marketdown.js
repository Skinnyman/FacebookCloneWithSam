import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

const Marketdown = ({data}) => {
  return (
    <View>
     
      <ScrollView>

      <View style={styles.Go}>
            <Image
            source={require('../assets/img1.jpeg')}
            style={styles.pic}
            />
           
             <Image
            source={require('../assets/img2.jpeg')}
            style={styles.pic1}
            />
            
      </View>
      <View style={styles.letter}>
            <Text style={styles.Alpha}>{data.caption}</Text>
            <Text style={styles.Alpha}>{data.caption}</Text>
      </View>
            </ScrollView>
    </View>
  )
}

export default Marketdown

const styles = StyleSheet.create({
  pic:{
     height:200,
     width:'52%'
  },
  Go:{
    flexDirection:'row',
    marginTop:9
  },
  pic1:{
    height:200,
    width:'55%',
    left:9
  },
  letter:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  Alpha:{
      fontSize:15,
      fontWeight:'400'
  },
})