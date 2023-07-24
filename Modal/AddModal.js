import { StyleSheet, Text, View,Modal } from 'react-native'
import React, { useState } from 'react'


const AddModal = () => {
    const [Visible,SetVisible] = useState(false);
    const toggleModal = () => {
        SetVisible(!Visible);
    }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Pop-up Menu</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ backgroundColor: 'white', padding: 16 }}>
          {/* Add your menu options here */}
          <TouchableOpacity onPress={() => console.log('Option 1 selected')}>
            <Text>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Option 2 selected')}>
            <Text>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default AddModal

const styles = StyleSheet.create({})