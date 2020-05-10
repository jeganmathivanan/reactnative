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

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      mobile: '',
      password: '',
      comform_password: '',
    };
  }

  _handlePress = async () => {
    console.log(this.state.email);
    console.log(this.state.mobile);
    console.log(this.state.password);
    console.log(this.state.conform_password);
    var url1 =
      'https://maharfid.000webhostapp.com/data.php?action=tradeeksignup&mobile=' + this.state.mobile +'&email=' + this.state.email +'&password=' + this.state.password + '';
    console.log(url1);
    fetch(url1, {
      // options => (optional)
      method: 'post', // Get / POST / ...
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //console.log(data);
       // console.log(data[0], 'checkdata');
        if (data[0] === 'data inserted') {
          //console.log(data[0], 'checkdata');
          this.storeData();
        }
        //this.props.navigation.navigate('Register');
      })
      .catch(function(err) {
        console.log('Error:' + err);
      });
    //this.props.navigation.navigate('Register');
  };
  ToLogin() {
    this.props.navigation.navigate('Home');
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('key', 'Logged');
      this.props.navigation.navigate('Dashboard');
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Happy Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => this.setState({email: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            onChangeText={text => this.setState({mobile: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={text => this.setState({conform_password: text})}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handlePress()}>
            <Text style={styles.buttontext}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.ToLogin()}>
            <Text style={styles.ToRegister}>Back To Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: 40,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    margin: 50,
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
