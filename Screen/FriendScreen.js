import React from 'react'
import SubFriend from '../component/SubFriend'
import FriendR from '../component/FriendR'
import { FlatList, ScrollView } from 'react-native'
import { PictureData } from '../Data/PictureData'
import PeopleK from '../component/PeopleK'

const FriendScreen = () => {
  return (
    <ScrollView>
      <SubFriend/>
      <FlatList
      data={PictureData}
      renderItem={({item}) =>(
        <FriendR data={item}/>
      )}
      />
    
       <PeopleK/>
    </ScrollView>
  )
}

export default FriendScreen


     