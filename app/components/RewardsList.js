import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Card, List, ListItem} from 'react-native-elements';
import * as firebase from "firebase";
import {getCurrentUser} from "../lib/auth";

class RewardsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenUrl: "null"
    };
  }

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

  componentDidMount() {
      console.log(getCurrentUser());
      // TODO: replace with a firebase funciton
      firebase.database().ref("usertokens/default_user").on("value", (data) => {
        var tokenName = data.val().tokename;
        console.log(tokenName);
        firebase.database().ref("tokens/"+ tokenName).once("value").then((data2) => {
          console.log(data2.val());

          this.setState({tokenUrl: data2.val()});
        })
      });

  };

  render() {
    var noDataText =  <Text style={styles.text}> You have no rewards yet, go to Bass Therapy </Text>;
    var list = [{
      avatar_url: this.state.tokenUrl,
      name: "It_me token"
    }]

    return(
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
              {
                list.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  badge={{value: 1}}
                  title={l.name}
                  />
                ))
              }
          </List>
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
  },
  image: {
    width: 200,
    height: 150
  }
});

export default RewardsList;
