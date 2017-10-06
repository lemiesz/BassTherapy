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
        <Text style={styles.text}> You have no rewards yet, go to Bass Therapy </Text>
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
    width: 26,
    height: 26
  }
});

export default RewardsList;
