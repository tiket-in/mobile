import React, {Component} from 'react'
import {View, Image} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen';
import SetPasswordScreen from './src/Screens/SetPasswordScreen';
import SetRegisterScreen from './src/Screens/SetRegisterScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import HomeScreen from './src/Screens/HomeScreen';
import MyOrderScreen from './src/Components/MyOrder';
import TixPointScreen from './src/Components/TixPoint';
import AccountScreen from './src/Components/Account';
import FormSearchPesawatScreen from './src/Screens/FormSearchPesawat';
import FormSearchHotelScreen from './src/Screens/FormSearchHotel';
import FormSearchMobilScreen from './src/Screens/FormSearchSearchMobil';
import FormSearchKeretaApiScreen from './src/Screens/FormSearchKeretaApi';
import FormSearchEventScreen from './src/Screens/FormSearchEvent';
import FormSearchAtraksiScreen from './src/Screens/FormSearchAtraksi';


const UserNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SetPassword: {
    screen: SetPasswordScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SetRegister: {
    screen: SetRegisterScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
  FormSearchPesawat: {
    screen: FormSearchPesawatScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
  FormSearchHotel: {
    screen: FormSearchHotelScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
  FormSearchMobil: {
    screen: FormSearchMobilScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
  FormSearchKeretaApi: {
    screen: FormSearchKeretaApiScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
  FormSearchEvent: {
    screen: FormSearchEventScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
  FormSearchAtraksi: {
    screen: FormSearchAtraksiScreen,
    navigationOptions:({
      backgroundColor: '#0064d2',
      header: null
    })
  },
}
)
AppNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = navigation.state.index === 0;

  return {
    tabBarVisible
  };
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  MyOrder: MyOrderScreen,
  TIXPoint: TixPointScreen,
  Account: AccountScreen
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let imageName = require('./src/Assets/home.png');
       if (routeName === 'MyOrder') {
        imageName = require('./src/Assets/list.png');
      }
        if (routeName === 'TixPoint') {
          imageName = require('./src/Assets/tickets.png');
        }
        if (routeName === 'Account') {
          imageName = require('./src/Assets/account.png')
        }

      // You can return any component that you like here!
      return <Image source={imageName} style={{width:25, resizeMode: 'contain', tintColor}} />;
    },
  })
})

const switchScreen = createSwitchNavigator({
  AuthScreen: UserNavigator,
  App: TabNavigator
})

const AppContainer = createAppContainer(switchScreen);
export default AppContainer;



// import React, {Component} from 'react'
// import {View} from 'react-native'
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import LoginScreen from './src/Screens/LoginScreen'
// import RegisterScreen from './src/Screens/RegisterScreen'

// export default class App extends Component{
//   render(){
//     return(
//       <View>
//         <RegisterScreen/>
//       </View>
//     )
//   }
// }




// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
