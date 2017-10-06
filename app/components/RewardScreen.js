import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements'
import RewardToken from "./RewardToken";
import * as firebase from 'firebase';
import Api from "../lib/api";
import TokenDefinitions from "../utility/TokenDefinitions";

class RewardScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: "null"
    }
  }

  componentDidMount() {
    TokenDefinitions.getToken().then((token) => {
      console.log(token);
      this.setState({
        token: token
      })
      firebase.database().ref()
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card
          style={styles.card}>
            <RewardToken tokenUrl={this.state.token} style={styles.text} />
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
