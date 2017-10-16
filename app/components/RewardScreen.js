import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements'
import RewardToken from "./RewardToken";
import * as firebase from 'firebase';
import Api from "../lib/api";
import TokenDefinitions from "../utility/TokenDefinitions";
import {getCurrentUser} from "../lib/auth";
import _ from "underscore";

class RewardScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenUrl: "null"
    }
}

  componentDidMount() {
    TokenDefinitions.getToken().then((token) => {
      var uid = getCurrentUser().uid;
      var tokenType = token.TYPE;
      return firebase.database().ref("users/")
        .child(uid)
        .child("tokens")
        .child(tokenType)
        .transaction((tokenValue) => {
          if(!tokenValue) {
            return  {
              count: 1,
              type: tokenType,
              tokenUrl: token.tokenUrl
            }
          } else {
            return _.extend(tokenValue, {count: parseInt(tokenValue.count) + 1})
          }
        }).then(() => {
          this.setState({
            tokenUrl: token.tokenUrl
        });
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card
          style={styles.card}>
            <RewardToken tokenUrl={this.state.tokenUrl} style={styles.text} />
            <Text style={styles.text}> You Recieved a new Reward </Text>
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
    backgroundColor: 'white',
    alignItems: 'center'
  },
  card:{
    backgroundColor: "white",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 25,
  },
  text: {
    alignSelf: 'center'
  }
});

export default RewardScreen;
