import React, {Component, PropTypes} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

const BUTTON_TEXT = "Start Here";
class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
  }

  componentDidMount() {
    this.navigation = this.props.navigation;
  }

  onClickHome = () => {
     this.navigation.navigate('TabContainer');
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
           <FormLabel>Email</FormLabel>
           <FormInput placeholder="username..." />
           <FormLabel>Password</FormLabel>
           <FormInput secureTextEntry placeholder="Password..." />

           <Button
             buttonStyle={{ marginTop: 20 }}
             backgroundColor="#03A9F4"
             title="SIGN IN"
             onPress={this.onClickHome}
           />
       </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  card:{
    backgroundColor: "white",
    width: 200,
    height: 200,
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0
  }
})

export default HomeScreen;
