import React, {Component} from "react";
import {View, ActivityIndicator} from 'react-native';
import {Card, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import * as auth from "../lib/auth";

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      confirmPassword: null,
      errorConfirm: false,
      invalidUserName: false,
      generalNetworkError: false,
      loading: false
    }
    this.navigation = this.props.navigation;
  }

   onClickSignUp = (userName, password, confirmPassword) => {
      var error = false;
      if(password !== confirmPassword) {
        this.setState({errorConfirm: true})
        error = true;
      }

      if(userName === null || userName === "") {
        this.setState({invalidUserName: true})
        error = true;
      } else {
        this.setState({invalidUserName: false})
      }

      if(error) {
        return;
      }

      this.setState({loading: true})
      auth.onSignUp(userName, password).then(() => {
        this.navigation.navigate('SignedIn');
        this.setState({loading: false})
      }).catch((error) => {
          this.setState({generalNetworkError: true})
          this.setState({loading: false})
      });

   }



  render() {
    var validatePassowrd = this.state.errorConfirm ? <FormValidationMessage>Passwords must match</FormValidationMessage> : null;
    var invalidUserName = this.state.invalidUserName ? <FormValidationMessage>Invalid User Name</FormValidationMessage> : null;
    var generalNetworkError = this.state.generalNetworkError ?  <FormValidationMessage>Oops something went wrong try again later</FormValidationMessage>: null;
    var signUpButton = !this.state.loading ? <Button
                                               buttonStyle={{ marginTop: 20 }}
                                               backgroundColor="#03A9F4"
                                               title="Create Account"
                                               onPress={this.onClickSignUp.bind(this, this.state.userName, this.state.password, this.state.confirmPassword)}
                                             /> :
                                             <ActivityIndicator animating={true}/>;

    return(
      <View>
        <Card>
           <FormLabel>Email</FormLabel>
           <FormInput onChangeText={ (userName) => this.setState({userName})} placeholder="username..." />
           {invalidUserName}
           <FormLabel>Password</FormLabel>
           <FormInput onChangeText={(password) => this.setState({password})} secureTextEntry placeholder="password..." />
           <FormLabel>Confirm Password</FormLabel>
           <FormInput onChangeText={(confirmPassword) => this.setState({confirmPassword})} secureTextEntry placeholder="confirm password..." />
           {validatePassowrd}
           {signUpButton}
        </Card>
      </View>
    )
  }

}

export default SignUp;
