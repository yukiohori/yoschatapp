import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Container, Header, Content, List, ListItem, Left, Body, Right, Button, Icon, Title, Thumbnail, Text } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'Chat',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              {/* <Text>Friends </Text>
              <Badge info>
                <Text>4</Text>
              </Badge> */}
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
        <ScrollView style={styles.container}>
          {/* <Container> */}
          {/* <Header /> */}
            <Content>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail small source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
                  </Left>
                  <Body>
                    <Text>YOS Online</Text>
                    <Text note>How are you doing?</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail small source={{ uri: 'https://www.buira.org/assets/images/shared/default-profile.png' }} />
                  </Left>
                  <Body>
                    <Text>Game Master</Text>
                    <Text note>Updating Apps</Text>
                  </Body>
                  <Right>
                    <Text note>1:43 am</Text>
                  </Right>
                </ListItem>
                
              </List>
            </Content>
          {/* </Container> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
