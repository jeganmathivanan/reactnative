/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import RegisterScreen from './Register';
import DashboardScreen from './Dashboard';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    //this._bootstrapAsync();

    this.state = {};
  }
  // _bootstrapAsync = async () => {
  //   var key = await AsyncStorage.getItem('key');
  //   console.log(key, 'key');
  //   if (key === 'Logged') {
  //     this.props.navigation.reset('Dashboard');
  //   } else if (key === 'InLogged') {
  //     this.props.navigation.navigate('Home');
  //   }
  // };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
