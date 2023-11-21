import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const windowWidth = Dimensions.get('window').width;

function Login() {
  const handleButtonPress = () => {
    Alert.alert('Button Pressed');
  };
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./asset/background1.png')}
        style={styles.backgroundImage}
      />
      <Image
        source={require('./asset/loginBackground2.png')}
        style={styles.loginBackgroundImage}
        resizeMode="stretch"
      />
      <View>
        <Text style={styles.welcomeBack}>Welcome Back</Text>
      </View>
      <View style={styles.inputBackground}>
        <Image style={styles.inputIcon} source={require('./asset/username.png')} />
        <TextInput
          style={styles.inputText}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Username"
        />
      </View>

      <View style={styles.inputBackground}>
        <Image style={styles.inputIcon} source={require('./asset/password.png')} />
        <TextInput
          style={styles.inputText}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  welcomeBack: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: responsiveHeight(2),
  },
  backgroundImage: {
    position: 'absolute',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  loginBackgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(33),
    zIndex: 2,
    marginBottom: responsiveHeight(2.8),
  },
  inputBackground: {
    textAlign: 'center',
    flexDirection: 'row',
    width: responsiveWidth(85),
    backgroundColor: '#fff',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveHeight(1),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputText: {
    color: '#000000',
    width: responsiveWidth(80),
    fontSize: responsiveFontSize(2.6),
    marginLeft: responsiveWidth(2),
  },
  inputIcon: {
    marginTop: responsiveHeight(1.1),
    marginBottom: responsiveHeight(1),
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },
  loginButton: {
    marginTop: responsiveHeight(19),
    borderRadius: 15,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(35),
    backgroundColor: '#128CFC',
  },
});

export default Login;
