import React from 'react';
import { connect } from 'react-redux';
import Header from '@/viewcomponents/Header';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Container, Content, List, ListItem, Left, Body, Right, Button, Title, CheckBox
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const orders = [
  'Устройство 1',
  'Устройство 2',
  'Устройство 3',
  'Устройство 4',
  'Устройство 5',
  'Устройство 6',
  'Устройство 7'
]

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = () => ({
    title: "Поиск устройства",
    headerRight: (
      <Button iconLeft transparent style={Styles.Padding}>
        <Icon name='search' color="#fff" />
      </Button>
    ),
  });

  render() {
    return (
      <Container>
        <ListItem itemDivider><Text>Распознанные устройства</Text></ListItem>
        <List
          dataArray={orders}
          keyExtractor={(item) => item}
          renderRow={order =>
            <ListItem
              button
              onPress={() => (null)}
            >
              <Body><Text>{order}</Text></Body>
              <Right><Icon active name="angle-right" /></Right>
            </ListItem>
          }
        />
        <ListItem itemDivider><Text>Нераспознанные устройства</Text></ListItem>
        <List
          dataArray={orders}
          keyExtractor={(item) => item}
          renderRow={order =>
            <ListItem
              button
              onPress={() => (null)}
            >
              <Body><Text>{order}</Text></Body>
              <Right><Icon active name="angle-right" /></Right>
            </ListItem>
          }
        />
      </Container>
    )
  }
};

const Styles = StyleSheet.create({
  Padding: { 
    padding: 20
  }
});

export default Home;