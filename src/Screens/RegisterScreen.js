import React, { useState } from 'react'
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

export default ({ navigation }) => {

    const [Email, setEmail] = useState(navigation.getParam('email'))
    
	
		return (
			<>
				<Header style={{ backgroundColor: '#0064d2' }}>
					<Left>
						<Button transparent onPress={() => navigation.navigate("Login")}>
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
						Sign up to start your adventure
					</Text>
				</View>
				<Item regular style={styles.form}>
                    <Input placeholder='Email' 
                    autoCapitalize='none'
                    onChangeText={text => setEmail(text)}/>
				</Item>
				<TouchableOpacity onPress={() => navigation.navigate("SetRegister", {email: Email})}>
					<Button rounded style={styles.buttonlogin}>
						<Text style={{ fontSize: 18 }}>NEXT</Text>
					</Button>
				</TouchableOpacity>
				<View style={styles.auth}>
					<Text style={{ fontSize: 18 }}>or with</Text>
				</View>
				<Card style={{ width: '95%', marginLeft: 10, marginTop: 20 }}>
					<CardItem>
						<Image
							source={require('../Assets/search.png')}
							style={{ width: 20, height: 20, marginRight: 10 }}
						/>
                    <TouchableOpacity>
						<Text style={{fontSize: 18, marginLeft: 15}}>Google</Text>
                        </TouchableOpacity>
					</CardItem>
					<CardItem>
                    
						<View
							style={{
								alignSelf: 'stretch',
								width: '100%',
								borderBottomColor: '#9f9f9f',
								borderBottomWidth: StyleSheet.hairlineWidth,
							}}
						/>    
					</CardItem>
					<CardItem>
						<Image
							source={require('../Assets/facebook.png')}
							style={{
								width: 20,
								height: 20,
								marginRight: 10,
							}}
						/>
                        <TouchableOpacity> 
						<Text style={{fontSize: 18, marginLeft: 15}}>Facebook</Text>
                        </TouchableOpacity>
					</CardItem>
				</Card>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textregister}>
                Have an account? LOG IN
                </Text>
                </TouchableOpacity>
            </View>
			</>
		)
	}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 18,
		marginTop: 15,
		marginLeft: 20,
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
