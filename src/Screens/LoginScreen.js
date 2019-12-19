import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ToastAndroid,
} from 'react-native'
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
	Toast,
} from 'native-base'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({ navigation }) => {
	const [SecureText, setSecureText] = useState(true)
	const [IconName, setIcon] = useState('eye-off')
	const [Email, setEmail] = useState('')
	const [Password, setPassword] = useState('')
	const [ErrorEmail, setErrorEmail] = useState('')
    const [ErrorPassword, setErrorPassword] = useState('')
    const [errors, setErrors] = useState(null)

	const hideUnhide = () => {
		setSecureText(!SecureText)
		if (IconName === 'eye') {
			setIcon('eye-off')
		} else {
			setIcon('eye')
		}
		
	}

	const onSubmit = () => {
		const form = new FormData()
		form.append('email', Email)
		form.append('password', Password)

		axios
			.post('http://192.168.6.180:9600/api/v1/user/login', form)
			.then((response) => {navigation.navigate('Home')
            ToastAndroid.show('Succes Login', ToastAndroid.LONG)})
			.catch(err => {
				setErrorEmail(err.response.data.message.email)
				ToastAndroid.show(err.response.data.message.email, ToastAndroid.LONG),
				setErrorPassword(err.response.data.message.password)
                ToastAndroid.show(err.response.data.message.password, ToastAndroid.LONG)
                setErrors(err.response.data.message)
				console.log(err.response.data)
			})
		
	}


	return (
		<>
			<Header style={{ backgroundColor: '#0064d2' }}>
				<Left>
					<Button transparent>
						<Icon name='arrow-back' />
					</Button>
				</Left>
				<Body>
					<Title>Log in</Title>
				</Body>
				<Right>
					<Button transparent>
						<Icon name='more' />
					</Button>
				</Right>
			</Header>
			<View>
				<Text style={styles.welcome}>
					Log in to enjoy faster booking, TIX Point, and member deals
				</Text>
			</View>
			<Item regular style={styles.form}>
                <Input placeholder='Email'
                autoCapitalize='none'
                 onChangeText={text => setEmail(text)} />
			</Item>
            {errors && <Text style={styles.errors}>{errors.email}</Text>}
            
			<Item regular style={styles.form}>
				<Input
					placeholder='Password'
					secureTextEntry={SecureText}
					autoCapitalize='none'
					onChangeText={text => setPassword(text)}
				/>
				<Button transparent onPress={() => hideUnhide()}>
					<Icon type='Feather' name={IconName} style={{ color: '#a9a9a9' }} />
				</Button>
			</Item>
            {errors && <Text style={styles.errors}>{errors.password}</Text>}
			<TouchableOpacity>
				<Text style={styles.forgot}>Forgot your password?</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity onPress={onSubmit}> */}
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Button rounded style={styles.buttonlogin}>
					<Text style={{ fontSize: 18 }}>LOG IN</Text>
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
						<Text style={{ fontSize: 18, marginLeft: 15 }}>Google</Text>
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
						<Text style={{ fontSize: 18, marginLeft: 15 }}>Facebook</Text>
					</TouchableOpacity>
				</CardItem>
			</Card>
			<View>
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
					<Text style={styles.textregister}>
						Don't have an account? REGISTER
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
		marginRight: 20,
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
		fontSize: 18,
    },
    errors: {
        marginLeft: 20,
        color: 'red'
    }
})
