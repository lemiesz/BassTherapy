import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';
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
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CardView
          style={styles.card}
          cardElevation={4}
          cardMaxElevation={4}
          cornerRadius={4}>
            <RewardToken tokenUrl={this.state.token} style={styles.text} />
            <Text style={styles.text}> You Recieved a new Reward </Text>
          </CardView>
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
