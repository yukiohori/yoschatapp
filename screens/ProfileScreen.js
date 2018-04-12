import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Container, Header, Content, List, ListItem, Left, Body, Right, Button, Icon, Title, Thumbnail, Text } from 'native-base';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'Profile',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <Thumbnail large source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
          <Text style={{marginTop: 10}}>Username</Text>
          <Text style={{marginTop: 10}}>PROFILE INFO</Text>
          <View style={{marginTop: 20}}>
            {/* <Text>Name@gmail.com</Text> */}
            
            <Button><Text>Change Profile</Text></Button>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  profile:{
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
  }
});