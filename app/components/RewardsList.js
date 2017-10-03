import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

class RewardsList extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Rewards',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/badge.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}> This is the reward list screen </Text>
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
  text: {
    alignSelf: "center"
  },
  icon: {
    width: 32,
    height: 32
  }
});

export default RewardsList;
