import React from "react";
import { Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Content, Text, List, ListItem, Left, Body, Right } from "native-base";

const routes = [
  { text: 'Найти устройства', value: 'find_devices', icon: 'search' },
  { text: 'Игры', value: 'games', icon: 'gamepad' },
  { text: 'Помощь', value: 'help', icon: 'question' },
  { text: 'Контакты', value: 'contacts', icon: 'phone' }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.background}>
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
                  <Icon name={data.icon} color={styles.FontColor.color} />
                </Left>
                <Body><Text style={styles.FontColor}>{data.text}</Text></Body>
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
  },
  
  background: {
    backgroundColor: '#F06292'
  },

  FontColor: {
    color: '#fff'
  }

});