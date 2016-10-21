
import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({

  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },

  render: function() {
    return (
       <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter Username'}
            maxLength={12}
            multiline={false}
            />
            <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry={true}
            placeholder={'Enter Password'}
            maxLength={12}
            multiline={false}
            />
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.onPress}
            >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },

  onPress: function() {
/*    console.log(this.state.username);
    console.log(this.state.password);*/
    fetch('https://dev.bus.no/BUSNewPL/ProductSuite/BUSAdmin/Account/Login',{
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    Username: this.state.username,
    Password: this.state.password,
  })
  })
  //.then((response) => response.json())
  .then((responseData) => {
    AsyncStorage.setItem('cookie',JSON.stringify(responseData));
    console.log("success");
    debugger;
    this.props.navigator.push({ name: 'landing' });
    })
  .done();
  }

});
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
   loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6'
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
  }

});