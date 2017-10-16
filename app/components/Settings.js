import React, {Component} from "react";
import {View, StyleSheet, Image} from "react-native";
import {Card, Button} from "react-native-elements";
import {onSignOut} from "../lib/auth.js";
import { NavigationActions } from 'react-navigation'

export default class Settings extends Component {

  static navigationOptions = {
    tabBarLabel: 'Settings',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/settings.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  logOut = () => {
    onSignOut().then(() => {
      var {dispatch} = this.props.navigation;
      console.log(this.props.navigation);
      var resetAction = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({routeName: "SignedOut"})
        ]
      })
      dispatch(resetAction);
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Card style={styles.card}>
          <Button
            backgroundColor="gray"
            title="LogOut" onPress={this.logOut} />
        </Card>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  card:{
    backgroundColor: "white",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 25,
  },
  icon: {
    width: 26,
    height: 26,
  },
})
