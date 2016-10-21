import React from 'react';

import {
  View,
  Text,
  AsyncStorage,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({

	componentDidMount: function() {
           AsyncStorage.getItem('cookie', (err, result) =>{
        console.log(result);
      });
    },		

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>Landing Page !!!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  }
});


