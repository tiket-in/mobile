import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';

export default class WelcomeScreen extends Component {
    render(){
        return(
            <Header style={{ backgroundColor: '#0064d2' }}>
					<Left>
						<Button transparent>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title>Register</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='more' />
						</Button>
					</Right>
				</Header>
            // <View>
            // <Image source={require('../Assets/bg.jpeg')}/>
            // </View>
        )
    }
}