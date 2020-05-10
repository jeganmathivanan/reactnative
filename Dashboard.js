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
  Image,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>My Gallery</Text>
          <Image
            source={require('./assest/bird.jpg')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', marginTop: 16}}
          />
          <Image
            source={require('./assest/african-elephant_435_600x450.jpg')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', marginTop: 16}}
          />
          <Image
            source={require('./assest/animal-photography-21.jpg')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', marginTop: 16}}
          />
          <Image
            source={require('./assest/animal.jpg')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', marginTop: 16}}
          />
          <Image
            source={require('./assest/beach_and_sea_12.jpg')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', marginTop: 16}}
          />
          <Image
            source={require('./assest/Birds-Wallpaper2.jpg')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', marginTop: 16}}
          />
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
    fontSize: 30,
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
