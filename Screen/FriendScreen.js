import React from 'react'
import SubFriend from '../component/SubFriend'
import FriendR from '../component/FriendR'
import { FlatList, ScrollView ,StyleSheet,View} from 'react-native'
import { PictureData } from '../Data/PictureData'
import PeopleK from '../component/PeopleK'

const FriendScreen = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
              <SubFriend/>
              {
                PictureData.map(item => (
                     <View key={item.id}>
                           <FriendR data={item}/>
                      </View>
                ))
              }
            
              <PeopleK/>
       </View>
    </ScrollView>
  )
}

export default FriendScreen
const styles = StyleSheet.create({
Container:{

}
})

     