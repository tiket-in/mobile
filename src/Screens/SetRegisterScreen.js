import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ToastAndroid} from 'react-native'
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
import axios from 'axios'

export default ({ navigation }) => {
    const [Email, setEmail] = useState(navigation.getParam('email'))
    const [SecureText, setSecureText] = useState(true)
    const [IconName, setIcon] = useState('eye-off')
    const [Password, setPassword] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [ErrorPhoneNumber, setErrorPhoneNumber] = useState('')
    const [ErrorFirstName, setErrorFirstName] = useState('')
    const [ErrorLastName, setErrorLastName] = useState('')
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
        form.append('first_name', FirstName)
        form.append('last_name', LastName)
        form.append('num_phone',PhoneNumber)

		axios
			.post('http://192.168.6.180:9600/api/v1/user/register', form)
            .then((response) => {navigation.navigate('Login')
            ToastAndroid.show('Succes Register', ToastAndroid.LONG)})
           
			.catch(err => {
				setErrorEmail(err.response.data.message.email)
				ToastAndroid.show(err.response.data.message.email, ToastAndroid.LONG),
				setErrorPassword(err.response.data.message.password)
                ToastAndroid.show(err.response.data.message.password, ToastAndroid.LONG),
                setErrorFirstName(err.response.data.message.first_name)
                ToastAndroid.show(err.response.data.message.first_name, ToastAndroid.LONG),
                setErrorLastName(err.response.data.message.last_name)
                ToastAndroid.show(err.response.data.message.last_name, ToastAndroid.LONG),
                setErrorPhoneNumber(err.response.data.message.num_phone)
                ToastAndroid.show(err.response.data.message.num_phone, ToastAndroid.LONG)
                setErrors(err.response.data.message)
                if(err.response.data.message === 'User Already Exist'){
                    ToastAndroid.show('User Already Exist', ToastAndroid.LONG)
                }

				console.log(err.response.data.message)
			})
    }
	

		return (
			<>
				<Header style={{ backgroundColor: '#0064d2' }}>
					<Left>
						<Button transparent onPress={() => navigation.navigate("Register")}>
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
                    <Text style={styles.params}>
                        {Email}
                    </Text>
                
				</View>
				<Item regular style={styles.form}>
                    <Input placeholder='First Name'
                    onChangeText={text => setFirstName(text)} />
				</Item>
                {errors && <Text style={styles.errors}>{errors.first_name}</Text>}
				<Item regular style={styles.form}>
                    <Input placeholder='Last Name'
                    onChangeText={text => setLastName(text)} />
				</Item>
				{errors && <Text style={styles.errors}>{errors.last_name}</Text>}
                <View>
                <Item regular style={styles.form}>
                    <Input placeholder='Phone Number'
                    onChangeText={number => setPhoneNumber(number)} />
				</Item>
                {errors && <Text style={styles.errors}>{errors.num_phone}</Text>}
				<Item regular style={styles.form}>
					<Input placeholder='Password'
                    secureTextEntry 
                    autoCapitalize='none'
                    onChangeText={text => setPassword(text)} />
                    <Button transparent onPress={() => hideUnhide()}>
					<Icon type='Feather' name={IconName} style={{ color: '#a9a9a9' }} />
				</Button>
                    
				</Item>
                {errors && <Text style={styles.errors}>{errors.password}</Text>}
                </View>
                <TouchableOpacity onPress={onSubmit}>
					<Button rounded  style={styles.buttonlogin}>
						<Text style={{ fontSize: 18 }}>REGISTER</Text>
					</Button>
				</TouchableOpacity>
			</>
		)
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
    },
    params: {
        marginLeft: 20,
        fontSize: 18
    },
    errors: {
        marginLeft: 20,
        color: 'red' 
    }
})
