import React from 'react';
import { connect } from 'react-redux';
import { Paddings } from '@/assets/styles';
import Header from '@/viewcomponents/Header';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Container, Content, List, ListItem, Left, Body, Right, Button, Title, CheckBox, Separator
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

class Find extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = () => ({
    title: "Поиск устройства",
    headerRight: (
      <Button iconLeft transparent style={Paddings.M_x}>
        <Icon name='search' color="#fff" />
      </Button>
    ),
  });

  render() {
    return (
      <Container>
        <Separator bordered style={Paddings.P_y}>
          <Text>Распознанные устройства</Text>
        </Separator>
        <List
          dataArray={orders}
          keyExtractor={(item) => item}
          renderRow={order =>
            <ListItem
              button
              onPress={() => (this.props.navigation.navigate('VoiceSender'))}
            >
              <Body><Text>{order}</Text></Body>
              <Right><Icon active name="angle-right" /></Right>
            </ListItem>
          }
        />
        <Separator bordered style={Paddings.P_y}>
          <Text>Нераспознанные устройства</Text>
        </Separator>
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

export default Find;