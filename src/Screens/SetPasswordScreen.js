import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
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
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RegisterScreen extends Component {
	render() {
		return (
			<>
				<Header style={{ backgroundColor: '#0064d2' }}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate("Register")}>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title>Set New Password</Title>
					</Body>
					<Right>
						<Button transparent>
							{/* <Icon name='more' /> */}
						</Button>
					</Right>
				</Header>
				<View>
					<Text style={styles.welcome}>
						Hi
					</Text>
                    <Text style={styles.welcometext}>
                        Set your new password. Tip: make it memorable, yet hard to guess.
                    </Text>
				</View>
				<Item regular style={styles.form}>
					<Input placeholder='Password' />
				</Item>
                <Text style={styles.minchar}>
                    Min. 7 characters with combination of numbers, symbol and capital letter
                </Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate("SetRegister")}>
					<Button rounded style={styles.buttonlogin}>
						<Text style={{ fontSize: 18 }}>CONFIRM</Text>
					</Button>
				</TouchableOpacity>
               
				
			</>
		)
	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 23,
		marginTop: 15,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    welcometext: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
	form: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginTop: 30,
		marginVertical: 8,
		marginLeft: 20,
		justifyContent: 'center',
		width: '90%',
		borderRadius: 5,
	},
	forgot: {
		marginTop: 10,
		textAlign: 'right',
		marginRight: 25,
		fontSize: 15,
	},
	buttonlogin: {
		marginTop: 20,
		backgroundColor: '#fedd00',
		paddingVertical: 25,
		width: '90%',
		justifyContent: 'center',
		marginLeft: 20,
	},
	auth: {
		fontSize: 30,
		marginTop: 35,
		justifyContent: 'center',
		alignItems: 'center',
    },
    textregister: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 18
    },
    minchar : {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        marginRight: 20
    }
})
