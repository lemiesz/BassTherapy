import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

class RewardToken extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: TOKENS.IT_ME
    }
  }

  componentDidMount() {
    this.setState({
      token: TOKENS.SLEEPY
    })
  }

  render() {
    var token = this.state.token;
    return (
      <View>
        <Image source={token} style={styles.image} />
      </View>
    )
  }

}

export default RewardToken;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150
}
});

const TOKENS = {
  SLEEPY: require('../assets/sleepy_token.png'),
  IT_ME: require('../assets/it_me_token.png')
}
