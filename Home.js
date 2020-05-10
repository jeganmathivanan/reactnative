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
  Alert,
  AsyncStorage,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  componentDidMount = async () => {
    var key = await AsyncStorage.getItem('key');
    console.log(key, 'key');
    if (key === 'Logged') {
      this.props.navigation.replace('Dashboard');
    } else if (key === 'InLogged') {
      this.props.navigation.replace('Home');
    }
  };

  _handlePress() {
    console.log(this.state.username);
    console.log(this.state.password);
    var url1 =
      'https://maharfid.000webhostapp.com/data.php?action=tradeeklogin&mobile=' +
      this.state.username +
      '&password=' +
      this.state.password +
      '';
    console.log(url1);
    fetch(url1, {
      // options => (optional)
      method: 'post', // Get / POST / ...
    })
      .then(response => response.json())
      .then(data => {
        console.log('hai');
        //console.log(data);
        console.log(data[0].email, 'checkdata');
        this.storeData();
      })
      .catch(function(err) {
        console.log('Error:' + err);
        Alert.alert('please enter correct mobile number and password');
      });
    //this.props.navigation.navigate('Register');
  }
  ToRegister() {
    this.props.navigation.navigate('Register');
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('key', 'Logged');
      this.props.navigation.navigate('Dashboard');
      console.log('data saved');
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Happy login</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.setState({password: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._handlePress()}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.ToRegister()}>
          <Text style={styles.ToRegister}>Don't you Registered ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  input: {
    margin: 15,
    height: 50,
    // borderColor: '#7a42f4',
    // borderWidth: 1,
    borderBottomColor: '#7a42f4',
    borderBottomWidth: 2,
    marginBottom: 30,
    backgroundColor: Colors.white,
  },
  buttontext: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 5,
    textAlign: 'center',
    color: '#FFF',
  },
  ToRegister: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    margin: 70,
    height: 55,
    backgroundColor: '#7a42f4',
    borderRadius: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 60,
    fontWeight: '700',
    color: '#7a42f4',
    margin: 15,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
