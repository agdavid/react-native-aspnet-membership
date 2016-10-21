import React from 'react';

import {
  View,
  Text,
  AsyncStorage,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({

	  getInitialState: function(){
    	return {
      		test: ''
    	};
  	},

	componentDidMount: function() {
           AsyncStorage.getItem('cookie', (err, result) =>{
        this.state.test = result;
        console.log(this.state.test);
      });
    },	

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>Landing Page !!!</Text>
         <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.sendCookie}
            >
            <Text style={styles.label}>SEND</Text>
         </TouchableHighlight>
      </View>
    );
  },

  sendCookie: function(){
  	debugger;
  	 var headersToSend = new Headers();
    headersToSend.append("cookie",this.state.test ); // here we insert the authentication cookie from async storage
	var options = {
 		headers: headersToSend,
 		method: 'GET'
	};

  	fetch('https://dev.bus.no/BUSNewPL/ProductSuite/BUSadmin/Unit/GetDocumentsForUnit',options)
  	.then((response) => response.json())
  	.then((responseData) => {
    	console.log(responseData);
    });
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
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
  }
});


