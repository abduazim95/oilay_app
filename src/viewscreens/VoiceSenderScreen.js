import React from 'react';
import { connect } from 'react-redux';
import { Paddings } from '@/assets/styles';
import Header from '@/viewcomponents/Header';

import {
  Text
} from 'react-native';
import {
  Container, Content, Card, CardItem, Item, Body, Input, Button
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

class VoiceSender extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = () => ({
    title: "Устройство",
    headerRight: null,
  });

  render() {
    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Item rounded>
                  <Input placeholder='Input text' />
                  <Button transparent>
                    <Icon active name='volume-up' style={Paddings.P_x} />
                  </Button>
                </Item>
                <Button rounded light block style={Paddings.M_y}>
                  <Text>Отправить</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
};

export default VoiceSender;