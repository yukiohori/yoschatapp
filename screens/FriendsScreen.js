import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Badge, Container, Header, Content, List, ListItem, Text, Separator, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKXwKtN3kDUaEvisaCbLRWI4ayZFqbLPY",
  authDomain: "https://mobileapp-14752.firebaseio.com",
  databaseURL: "https://mobileapp-14752.firebaseio.com/",
  storageBucket: "mobileapp-14752.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  storeHighScore(userId, score) {
    firebase.database().ref('users/' + userId).set({
      highscore: score
    });
  }

  componentDidMount(){
    this.storeHighScore(12323,3123);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Text>Friends </Text>
              <Badge info>
                <Text>3</Text>
              </Badge>
            </View>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          <Right>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Button transparent>
                <Icon name='add' />
              </Button>
              <Button transparent>
                <Icon name='search' />
              </Button>
            </View>
          </Right>
        </Header>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <List>
            <Separator bordered>
              <Text>Friends recommend</Text>
            </Separator>
            <ListItem style={{borderColor: 'transparent'}}>
              <Thumbnail small source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
              <Text style={{marginLeft:15}}>Kelso Brittany</Text>
            </ListItem>
            <Separator bordered>
              <Text>Friends</Text>
            </Separator>
            <ListItem style={{borderColor: 'transparent'}}>
              <Thumbnail small source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
              <Text style={{marginLeft:15}}>Caroline Aaron</Text>
            </ListItem>
            <ListItem style={{borderColor: 'transparent'}}>
            <Thumbnail small source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
              <Text style={{marginLeft:15}}>Aaron Bennet</Text>
            </ListItem>
            <ListItem style={{borderColor: 'transparent'}}>
              <Thumbnail small source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
              <Text style={{marginLeft:15}}>Claire Barclay</Text>
            </ListItem>
          </List>
        </ScrollView>
      </View>
    );
  }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 20
  },
  topContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#2980b9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    // marginTop: -20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
