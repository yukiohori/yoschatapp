import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.textstyle}>YOS CHAT</Text>
                <TextInput placeholder="Username" maxLength={20} underlineColorAndroid={'transparent'} style={styles.textinput}></TextInput>
                <TextInput placeholder="Password" maxLength={20} underlineColorAndroid={'transparent'} secureTextEntry={true} style={styles.textinput}></TextInput>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={[styles.textCenter,styles.textBtn]} >LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#fff',
  },
  form: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  textstyle: {
    textAlign: 'center',
    marginBottom: 10
  },
  textCenter: {
    textAlign: 'center'
  },
  textinput: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  btnStyle: {
    padding: 10,
    backgroundColor: '#2980b9',
    borderRadius: 5,
  },
  textBtn: {
    color: 'white'
  }
});
