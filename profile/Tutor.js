import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import {Button} from 'react-native';
export default class Student extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Tutor page</Text>
        <Button title="GO BACK"
      onPress={() => this.props.navigation.navigate('Main')}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})