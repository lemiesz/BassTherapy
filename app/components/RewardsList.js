import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Card, List, ListItem} from 'react-native-elements';
import * as firebase from "firebase";
import {getCurrentUser} from "../lib/auth";
import _ from "underscore";

class RewardsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenUrl: "null",
      list: []
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
    var uid = getCurrentUser().uid;
    var tokensRef = firebase.database()
                            .ref("users/")
                            .child(uid)
                            .child("tokens");
    tokensRef.on("value", (data) => {
      var tokens = data.val();
      console.log(tokens);
      if(!tokens) {
        return;
      }
      var list = Object.values(tokens);
      this.setState({list: list});
      console.log(tokens);
    })
    // console.log(getCurrentUser());
    // // TODO: replace with a firebase funciton
    // firebase.database().ref("usertokens/default_user").on("value", (data) => {
    //   var tokenName = data.val().tokename;
    //   console.log(tokenName);
    //   firebase.database().ref("tokens/"+ tokenName).once("value").then((data2) => {
    //     console.log(data2.val());
    //
    //     this.setState({tokenUrl: data2.val().tokenUrl});
    //   })
    // });

  };

  render() {
    var noDataText =  <Text style={styles.text}> You have no rewards yet, go to Bass Therapy </Text>;
    var list = this.state.list;
    var listWithData = <List containerStyle={{marginBottom: 20}}>
                          {
                            list.map((l, i) => (
                            <ListItem
                              roundAvatar
                              avatar={{uri:l.tokenUrl}}
                              key={i}
                              badge={{value: l.count}}
                              title={l.type}
                              />
                            ))
                          }
                      </List>;
    var toRender = list.length == 0 ? noDataText : listWithData;
    return(
      <View style={styles.container}>
        {toRender}
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
