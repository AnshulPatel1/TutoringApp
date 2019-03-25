import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from 'react-native';
import {TouchableOpacity} from 'react-native';


export default class Main extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text style={styles.textlayoutheader}>
          Hi {currentUser && currentUser.email}!
        </Text>

  {/*the segment below determines the style and layout of the student button*/}
      <View style={styles.container2} > 
      <Text style={styles.text1}> 
      Please click here to enter Student mode 
      </Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Student')}>
      <Text style={styles.textlayout}>Student</Text>
      </TouchableOpacity>

   {/* the segment below determines the style and layout of the Tutor button*/}
      <Text style={styles.text1}> 
      Please click here to enter Tutor mode 
      </Text>
     <TouchableOpacity 
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Tutor')}>
      <Text style={styles.textlayout}>Tutor</Text>
      </TouchableOpacity>
      </View>

      </View>

    )
  }
}
const styles = StyleSheet.create({
button: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
  padding: 10,
  height: 50,
  width: 200, 
  marginTop: 40,
  marginBottom: 40,
  fontSize: 90,
  },
container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Comic Sans MS',
    backgroundColor: '#000000'
  },
container2: {
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Comic Sans MS',
  backgroundColor: '#000000',
  left: '3%',
},
textlayout: {
fontSize: 30,
justifyContent: 'space-evenly',
color: 'white',
},
textlayoutheader: {
fontSize: 30,
justifyContent: 'space-evenly',
color: 'white',
},
text1: {
fontSize: 20,
justifyContent: 'center',
color: 'white',
},

});

