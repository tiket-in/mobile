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

export default class SetRegisterScreen extends Component {
	render() {
		return (
			<>
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
				<View>
					<Text style={styles.welcome}>
						Email
					</Text>
				</View>
				<Item regular style={styles.form}>
					<Input placeholder='First Name' />
				</Item>
				<Item regular style={styles.form}>
					<Input placeholder='Last Name' />
				</Item>
				
                <View style={{flexDirection: 'row'}}>
                <Item regular stackedLabel style={styles.form}>
					<Input placeholder='Country Code' />
				</Item>
				<Item regular style={styles.form}>
					<Input placeholder='Last Name' />
				</Item>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("WelcomeScreen")}>
					<Button rounded  style={styles.buttonlogin}>
						<Text style={{ fontSize: 18 }}>REGISTER</Text>
					</Button>
				</TouchableOpacity>
			</>
		)
	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 18,
		marginTop: 15,
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
    }
})
