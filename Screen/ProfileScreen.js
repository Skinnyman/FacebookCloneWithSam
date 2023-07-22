import { View, Text, TouchableOpacity ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import ProfileTop from '../component/ProfileTop'
import ProfileDown from '../component/ProfileDown'
import ProfileBottom from '../component/ProfileBottom'


const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <ScrollView>
         <ProfileTop/>
        
         <ProfileBottom/>
         <TouchableOpacity style={styles.Container1} onPress={() => navigation.navigate('Login')}>
                <Text>Log Out</Text>
            </TouchableOpacity>
         
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'white',
    paddingTop:9,
    
    
  },
  Container1:{
    left:50,
    borderWidth:1,
    padding:10,
    width:'79%',
    paddingLeft:120,
    borderRadius:12,
    marginTop:-16,
    bottom:400
  }
})