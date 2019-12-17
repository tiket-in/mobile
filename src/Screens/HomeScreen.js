import React, { Component } from 'react';
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
    Content
} from 'native-base'
import colors from '../Theme/colors';
import { SliderBox } from 'react-native-image-slider-box'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013452_viptqt.jpg',
                'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013520_ijn65j.jpg',
                'https://res.cloudinary.com/auliasandie/image/upload/v1576610184/Asset%20Tiketin/Home%20Dashboard/20191218_021454_dqovsm.jpg',
                'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013710_m35cby.jpg',
                'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013723_vh8gk8.jpg',
                'https://res.cloudinary.com/auliasandie/image/upload/v1576608215/Asset%20Tiketin/Home%20Dashboard/20191218_013736_jxyjxz.jpg'
            ]
        }
    }

    
        render(){
        return(
            <View>
            <Header style={{ backgroundColor: colors.blue, marginBottom: -17}}>
            <Left>
                <Image source={require('../Assets/logo.png')} style={{width: '50%', height: 35, resizeMode: 'contain', marginLeft:-150}}/>
            </Left>	
                <Text style={{color: 'white', marginTop: 20, textAlign: 'right', marginRight: -150}}>1.000</Text>
			</Header>
            {/* <View style={styles.carouselWrapper}> */}
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={300}
                    autoplay='true'
                    circleLoop
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    resizeMode={'contain'}
                    resizeMethod={'resize'}
    
                />
            {/* </View> */}
            </View>
        )
    }}

    const styles = StyleSheet.create({
        carouselWrapper: {
            backgroundColor: '#59637b',
        }
    })
    
