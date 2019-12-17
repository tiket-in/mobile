import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Form,
	Item,
	Input,
	Card,
	CardItem,
} from 'native-base'

export default class WelcomeScreen extends Component {
    render(){
        return(
        <View>
            <View>
            <Image source={require('../Assets/bg.jpeg')} style={{width: 450, height:260, marginLeft: -10}}/>
            <Text style={styles.welcomescreen}>
                Hi, welcome
            </Text>
            <Text style={styles.textwelcome}>
                Now you can book faster with Smart Traveler, earn TIX Point, enjoy Member Deals and a lot more benefits. Are you ready?
            </Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
					<Button rounded style={styles.buttongo}>
						<Text style={{ fontSize: 18, color: 'white' }}>LETS GO!</Text>
					</Button>
				</TouchableOpacity>
            
        </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomescreen : {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20
    },
    textwelcome : {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        fontSize: 20
    },
    buttongo: {
		marginTop: 20,
		backgroundColor: '#0064d2',
		paddingVertical: 25,
		width: '90%',
		justifyContent: 'center',
        marginLeft: 20,
	},
})