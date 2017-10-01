import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';
import RewardToken from "./RewardToken";
import * as firebase from 'firebase';
import Api from "../lib/api";

class RewardScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var data = Api.get("randomToken").then((data) => {

    }).catch((error) => {
        console.log(error);
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
            <RewardToken tokenIndex={"SLEEPY"} style={styles.text} />
            <Text style={styles.text}>Hellow Text </Text>
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
