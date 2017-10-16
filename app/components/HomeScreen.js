import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import * as auth from "../lib/auth";
import { NavigationActions } from 'react-navigation'

const BUTTON_TEXT = "Start Here";
class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      error: false,
      loading: false
    }
  }

  componentDidMount() {
    this.navigation = this.props.navigation;
  }

  onClickLogin = (username, password) => {
     this.setState({loading: true})
     auth.onSignIn(username, password)
     .then(() => {
       this.navigation.navigate("SignedIn");
       this.setState({loading: false})

     })
     .catch((error) => {
       // handle error here
      this.setState({error: true, loading: false})
     });
  }

  onClickSignUp = () => {
    this.navigation.navigate('SignUp');
  }

  render() {
    var errorRender = this.state.error ? <Text style=  {{color: 'red'}}> Oops please try again </Text> : null;
    var signInButton = !this.state.loading ? <Button
                                             buttonStyle={{ marginTop: 20 }}
                                             backgroundColor="#03A9F4"
                                             title="SIGN IN"
                                             onPress={this.onClickLogin.bind(this, this.state.userName, this.state.password)}
                                           /> : <ActivityIndicator animating = {true} />
    return (
      <View style={styles.container}>
        <Card>
           <FormLabel>Email</FormLabel>
           <FormInput onChangeText={ (userName) => this.setState({userName})} placeholder="username..." />
           <FormLabel>Password</FormLabel>
           <FormInput onChangeText={(password) => this.setState({password})} secureTextEntry placeholder="Password..." />
           {errorRender}
           {signInButton}
           <Button
             buttonStyle={{ marginTop: 20 }}
             backgroundColor="transparent"
             textStyle={{ color: "#bcbec1" }}
             title="Sign Up"
             onPress={this.onClickSignUp}
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
