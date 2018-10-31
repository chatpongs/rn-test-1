import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleSubmit = () => {
    this.props.navigation.replace('Home');
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <Image style={styles.logo} source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
        <TextInput style={styles.textInput} placeholder={'email address'} />
        <TextInput style={styles.textInput} placeholder={'password'} secureTextEntry={true} />
        <Button icon={'lock'} mode={'contained'} onPress={this.handleSubmit}>Login</Button>
      </KeyboardAvoidingView>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    minWidth: 300,
    marginBottom: 10,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 10,
  }
});

export default Login;