import { View,Image,TextInput ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'



const Subheader = () => {
  return (
    <View >
        <View style={styles.Container}>
                <Image
                source={require('../assets/img1.jpeg') }
                style={{width:43,height:43,borderRadius:19,marginTop:15,marginLeft:12}}
                />
                <View style={styles.TB}>
                <TextInput
                placeholder="What's on your mind?"
                style={styles.Text}
                />
                </View>
                <TouchableOpacity>
                <Image
                source={require('../assets/cameraroll.png')}
                style={styles.camera}
                />
                </TouchableOpacity>
        </View>
        
      
      
    </View>
  )
}

export default Subheader

const styles = StyleSheet.create({
  Container:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    padding:20,
    marginTop:12,
    borderWidth:1,
    borderColor:'white',
    marginBottom:17,
    bottom:12

    

  },
  camera:{
    width:25,
    height:27,
    marginTop:19,
    marginRight:20,
    left:12
  },
  Text:{
     borderRadius:29,
     borderWidth:1,
     width:'120%',
     marginTop:10,
     marginRight:30,
     padding:9,
     marginLeft:1,
     
  },
  TB:{
     marginRight:20,
  },
})
