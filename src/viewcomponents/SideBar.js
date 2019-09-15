import React from "react";
import { Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Content, Text, List, ListItem, Left, Body, Right } from "native-base";

const routes = [
  { text: 'Найти устройства', value: 'find_devices', icon: 'search' },
  { text: 'Игры', value: 'games', icon: 'gamepad' },
  { text: 'Помощь', value: 'help', icon: 'help' },
  { text: 'Контакты', value: 'contacts', icon: 'phone' }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <List
          icon
          dataArray={routes}
          keyExtractor={(item) => item.value}
          renderRow={data => {
            return (
              <ListItem
                icon
                button
                onPress={() => this.props.navigation.navigate(data.value)}>
                <Left>
                  <Icon name={data.icon} />
                </Left>
                <Body><Text>{data.text}</Text></Body>
              </ListItem>
            );
          }}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Icon: {
    marginRight: 20,
  }
});