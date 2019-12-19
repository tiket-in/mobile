import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import {
	H4,
	H3,
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
	Content,
} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../Theme/colors'
import { SliderBox } from 'react-native-image-slider-box'
import TicketCard from '../Components/TicketCard'

export default class HomeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [
				'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013452_viptqt.jpg',
				'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013520_ijn65j.jpg',
				'https://res.cloudinary.com/auliasandie/image/upload/v1576610184/Asset%20Tiketin/Home%20Dashboard/20191218_021454_dqovsm.jpg',
				'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013710_m35cby.jpg',
				'https://res.cloudinary.com/auliasandie/image/upload/v1576608216/Asset%20Tiketin/Home%20Dashboard/20191218_013723_vh8gk8.jpg',
				'https://res.cloudinary.com/auliasandie/image/upload/v1576608215/Asset%20Tiketin/Home%20Dashboard/20191218_013736_jxyjxz.jpg',
			],
		}
	}

	render() {
		return (
			<ScrollView
				showsHorizontalScrollIndicator={false}
				style={{ horizontal: 'true', flex: 1 }}>
				<View
					style={[
						styles.contentContainer,
						// { height: Dimensions.get('window').height - 0 },
					]}>
					<Header style={{ backgroundColor: colors.blue, marginBottom: -17 }}>
						<Left>
							<Image
								source={require('../Assets/logo.png')}
								style={{
									width: '50%',
									height: 35,
									resizeMode: 'contain',
									marginLeft: -150,
								}}
							/>
						</Left>
						<Text
							style={{
								color: 'white',
								marginTop: 20,
								textAlign: 'right',
								marginRight: -150,
							}}>
							1.000
						</Text>
					</Header>
					<SliderBox
						images={this.state.images}
						sliderBoxHeight={300}
						autoplay='true'
						circleLoop
						onCurrentImagePressed={index =>
							console.warn(`image ${index} pressed`)
						}
						dotColor='#FFEE58'
						inactiveDotColor='#90A4AE'
						resizeMode={'contain'}
						dotStyle={{ marginTop: 10, marginBottom: 11 }}
					/>
					<Container style={styles.contentWrapper}>
						<View style={{ paddingHorizontal: 15, marginTop: 10 }}>
							<H3 style={styles.welcomeText}>Hey kamu, mau kemana?</H3>
						</View>
						<View style={styles.ticketCardWrapper}>
							<TicketCard
								text='Pesawat'
								source={require('../Assets/iconplane.png')}
								onPress={() =>
									this.props.navigation.navigate('FormSearchPesawat')
								}
							/>
							<TicketCard
								text='Hotel'
								source={require('../Assets/iconhotel.png')}
								onPress={() => {
									this.props.navigation.navigate('FormSearchHotel')
								}}
							/>
							<TicketCard
								text='Sewa Mobil'
								source={require('../Assets/iconcar.png')}
								onPress={() => {
									this.props.navigation.navigate('FormSearchMobil')
								}}
							/>
							<TicketCard
								text='Kereta Api'
								source={require('../Assets/icontrain.png')}
								onPress={() => {
									this.props.navigation.navigate('FormSearchKeretaApi')
								}}
							/>
							<TicketCard
								text='Atraksi'
								source={require('../Assets/iconattractions.webp')}
								onPress={() => {
									this.props.navigation.navigate('FormSearchAtraksi')
								}}
							/>

							<TicketCard
								text='Event'
								source={require('../Assets/iconentertainment.png')}
								onPress={() => {
									this.props.navigation.navigate('FormSearchEvent')
								}}
							/>
						</View>
					</Container>
					<View style={styles.sliderimage}>
						<View style={{ marginTop: -130 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Hotel untuk Bacpacker di Asia Tenggara
							</Text>
							<Text style={{ color: 'grey', marginLeft: 18 }}>
								Backpackeran keliling Asia Tenggara, bisa banget nginep di sini!
							</Text>
						</View>
						<ScrollView showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={{ flexDirection: 'row', marginRight: 20 }}>
							<View>
								<View
									style={{
										width: 180,
										height: 190,
										borderRadius: 10,
										marginTop: 1,
										top: 10,
									}}>
									<Image
										source={require('../Assets/thebed.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 4,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 180,
										height: 190,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										The Bed Station Kuala Lumpur
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Pesan hotel ini saat ke KL
									</Text>
								</View>
							</View>
							<View>
								<View
									style={{
										width: 180,
										height: 190,
										borderRadius: 10,
										marginTop: 1,
										top: 10,
									}}>
									<Image
										source={require('../Assets/tidohostel.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 4,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 180,
										height: 190,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Tido Hostel Penang
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Eksplor Penang, nginep di sini!
									</Text>
								</View>
							</View>
							<View>
								<View
									style={{
										width: 180,
										height: 190,
										borderRadius: 10,
										marginTop: 1,
										top: 10,
									}}>
									<Image
										source={require('../Assets/capsulepod.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 4,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 180,
										height: 190,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Capsule Pod Boutique Hostel
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Liburan dan nikmati hotel kapsul unik
									</Text>
								</View>
							</View>
							<View>
								<View
									style={{
										width: 180,
										height: 190,
										borderRadius: 10,
										marginTop: 1,
										top: 10,
									}}>
									<Image
										source={require('../Assets/picnichotel.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 4,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 180,
										height: 190,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Picnic Hotel Bangkok
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Piknik di Picnic Hotel Bangkok
									</Text>
								</View>
							</View>
							<View>
								<View
									style={{
										width: 180,
										height: 190,
										borderRadius: 10,
										marginTop: 1,
										top: 10,
									}}>
									<Image
										source={require('../Assets/gustibnb.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 4,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 180,
										height: 190,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Gusti BnB
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Harus ke sini saat di Singapore
									</Text>
								</View>
							</View>
						</ScrollView>
					</View>
					<View style={styles.contentPenawaran}>
						<View style={{ marginTop: 10 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Penawaran Spesial
							</Text>
							<Text style={{ color: 'grey', marginLeft: 18, marginTop: 5}}>
								Penawaran Spesial Khusus Buat Kamu
							</Text>
						</View>
                        <ScrollView showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={{ flexDirection: 'row', marginRight: 20 }}>
						<View style={{flexDirection: 'row'}}>
							<Card style={{width: 280, marginLeft: 18, marginTop: 18}}>
								<CardItem cardBody style={{borderRadius:10}}>
									<Image
										source={{ uri: 'https://res.cloudinary.com/auliasandie/image/upload/v1576676006/Asset%20Tiketin/Home%20Dashboard/20191218_201431_fieaym.jpg' }}
										style={{ height: 110, width: 50, flex:1}}
									/>
								</CardItem>
								<CardItem footer bordered>
									<Text>
                                        Airport Transfer Jakarta Diantar dari Bandara dengan airport transfer
                                    </Text>
                                    
								</CardItem>
                                
							</Card>
                            <Card style={{width: 280, marginLeft: 18, marginTop: 18}}>
								<CardItem cardBody style={{borderRadius:10}}>
									<Image
										source={{ uri: 'https://res.cloudinary.com/auliasandie/image/upload/v1576676004/Asset%20Tiketin/Home%20Dashboard/20191218_201500_mnxfwu.jpg' }}
										style={{ height: 110, width: 50, flex:1}}
									/>
								</CardItem>
								<CardItem footer bordered>
									<Text>
                                        Harga terbaik Garuda Indonesia

                                    </Text>
                                    
								</CardItem>
                                
							</Card>
                            <Card style={{width: 280, marginLeft: 18, marginTop: 18}}>
								<CardItem cardBody style={{borderRadius:10}}>
									<Image
										source={{ uri: 'https://res.cloudinary.com/auliasandie/image/upload/v1576676003/Asset%20Tiketin/Home%20Dashboard/20191218_201549_ol6t7r.jpg' }}
										style={{ height: 110, width: 50, flex:1}}
									/>
								</CardItem>
								<CardItem footer bordered>
									<Text>
                                        TGIF! Nanny's Pavilion
                                    </Text>
								
                                    
								</CardItem>
                                
							</Card>
                            <Card style={{width: 280, marginLeft: 18, marginTop: 18}}>
								<CardItem cardBody style={{borderRadius:10}}>
									<Image
										source={{ uri: 'https://res.cloudinary.com/auliasandie/image/upload/v1576676006/Asset%20Tiketin/Home%20Dashboard/20191218_201431_fieaym.jpg' }}
										style={{ height: 110, width: 50, flex:1}}
									/>
								</CardItem>
								<CardItem footer bordered>
									<Text>
                                        Airport Transfer Jakarta Diantar dari Bandara dengan airport transfer
                                    </Text>
                                    
								</CardItem>
                                
							</Card>
                            <Card style={{width: 280, marginLeft: 18, marginTop: 18}}>
								<CardItem cardBody style={{borderRadius:10}}>
									<Image
										source={{ uri: 'https://res.cloudinary.com/auliasandie/image/upload/v1576676006/Asset%20Tiketin/Home%20Dashboard/20191218_201431_fieaym.jpg' }}
										style={{ height: 110, width: 50, flex:1}}
									/>
								</CardItem>
								<CardItem footer bordered>
									<Text>
                                        Airport Transfer Jakarta Diantar dari Bandara dengan airport transfer
                                    </Text>
                                    
								</CardItem>
                                
							</Card>
                            <Card style={{width: 280, marginLeft: 18, marginTop: 18}}>
								<CardItem cardBody style={{borderRadius:10}}>
									<Image
										source={{ uri: 'https://res.cloudinary.com/auliasandie/image/upload/v1576676006/Asset%20Tiketin/Home%20Dashboard/20191218_201431_fieaym.jpg' }}
										style={{ height: 110, width: 50, flex:1}}
									/>
								</CardItem>
								<CardItem footer bordered>
									<Text>
                                        Airport Transfer Jakarta Diantar dari Bandara dengan airport transfer
                                    </Text>
                                    
								</CardItem>
                                
							</Card>
						</View>
                        </ScrollView>
                        <View style={styles.rans}>
						<View style={{ marginTop: -130 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Kamu Udah Tau Belum?
							</Text>
							<Text style={{ color: 'grey', marginLeft: 18, marginTop: 8 }}>
								Fakta menarik yang harus kamu tahu!
							</Text>
						</View>
						<ScrollView showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={{ flexDirection: 'row', marginRight: 20 }}>
							<View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/rans.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Keseruan RANS The World
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Ada yang seru saat Raffi Ahmad dan Nagita Slavina jalan-jalan! Simak, kuy!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/visa.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Keseruan RANS The World
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Ada yang seru saat Raffi Ahmad dan Nagita Slavina jalan-jalan! Simak, kuy!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/duty.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Keseruan RANS The World
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Ada yang seru saat Raffi Ahmad dan Nagita Slavina jalan-jalan! Simak, kuy!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/japan.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Keseruan RANS The World
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Ada yang seru saat Raffi Ahmad dan Nagita Slavina jalan-jalan! Simak, kuy!
									</Text>
								</View>
                                
							</View>
                            </ScrollView>
                            </View>
                        <View style={styles.country}>
						<View style={{ marginTop: -130 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Destinasi yang Sudah Dijelajahi RANS The World
							</Text>
						</View>
						{/* <ScrollView
							vertical={true}
							style={{ flexDirection: 'column', marginRight: 20 }}> */}
							<View style={{flexDirection:'row'}}>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/australia.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                
                                <View>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/vietnam.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                </View>
                                </View>
                                <View>
                                <View style={{flexDirection:'row', marginTop: 15}}>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/thailand.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                
                                <View>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/newzealand.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                </View>
                                </View>
								</View>
					</View>
                    <View style={styles.rans}>
						<View style={{ marginTop: -130 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Senang-senang di Akhir Pekan!
							</Text>
							<Text style={{ color: 'grey', marginLeft: 18, marginTop: 8 }}>
								Akhir pekan jangan di rumah aja. Kamu bisa ke sini biar makin seru!
							</Text>
						</View>
						<ScrollView showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={{ flexDirection: 'row', marginRight: 20 }}>
							<View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/sudirman.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Malam Minggu hanya 100ribu!
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Cuma 100ribu, kamu bisa happy di tempat ini!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/skateboard.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Destinasi Malam Minggu, Bikin Ceria Lagi!
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Nggak ada malam Minggu kelabu, cuma ada hal seru!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/main.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Weekend Seru di Taman Jakarta!
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Banyak Taman di Jakarta yang bisa kamu kunjungi, lho!
									</Text>
								</View>
                                
							</View>
                            
                            </ScrollView>
                            </View>
                            <View style={styles.country}>
						<View style={{ marginTop: -130 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Rekomendasi Hotel Domestik untuk Liburan
							</Text>
						</View>
						{/* <ScrollView
							vertical={true}
							style={{ flexDirection: 'column', marginRight: 20 }}> */}
							<View style={{flexDirection:'row'}}>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/kolamrenang.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                
                                <View>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/dago.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                </View>
                                </View>
                                <View>
                                <View style={{flexDirection:'row', marginTop: 15}}>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/tamansafari.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                
                                <View>
								<View
									style={{
										width: 195,
										height: 180,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/pantai.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 5,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
                                </View>
                                </View>
								</View>
					</View>
                    <View style={styles.rans}>
						<View style={{ marginTop: -130 }}>
							<Text style={{ fontSize: 18, marginLeft: 18 }}>
								Atraksi yang cocok untuk Minggu ini!
							</Text>
							<Text style={{ color: 'grey', marginLeft: 18, marginTop: 8 }}>
								Liburan kamu makin asyik deh kalau ke atraksi di akhir pekan!
							</Text>
						</View>
						<ScrollView showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={{ flexDirection: 'row', marginRight: 20 }}>
							<View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/timezone.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Timezone
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Nikmati serunya atraksi ini bersama keluarga!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/speedboat.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Bounty Cruises Bali
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Ajak keluarga untuk bermain di sini!
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/child.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Kidzania Jakarta
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Ajak si kecil untuk eksplor atraksi ini
									</Text>
								</View>
                                
							</View>
                            <View>
								<View
									style={{
										width: 300,
										height: 120,
										borderRadius: 20,
										marginTop: 1,
                                        top: 10,
                                        
									}}>
									<Image
										source={require('../Assets/amazone.jpg')}
										style={{
											width: undefined,
											height: undefined,
											resizeMode: 'cover',
											flex: 1,
											borderRadius: 13,
											marginLeft: 20,
											// marginBottom: ,
										}}
									/>
								</View>
								<View
									style={{
										width: 300,
										height: 120,
									}}>
									<Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
										Amazone
									</Text>
									<Text
										style={{
											fontSize: 14,
											marginLeft: 20,
											marginTop: 5,
											color: 'grey',
										}}>
										Weekend kali ini pasti asyik ke sini!
									</Text>
								</View>
                                
							</View>
                            </ScrollView>
                            </View>
				</View>
                </View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		flexGrow: 1,
	},
	contentWrapper: {
		// backgroundColor: 'white',
		height: 310,
	},
	welcomeText: {
		fontSize: 18,
		marginLeft: 5,
	},
	ticketCardWrapper: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		padding: 10,
		marginTop: 10,
	},
	sliderimage: {
		height: 200,
		marginTop: 150,
	},
	rans: {
		height: 110,
		marginTop: 150,
    },
    country: {
        height: 300,
        marginTop: 150,
    }
})
