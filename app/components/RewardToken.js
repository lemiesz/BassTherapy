import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

class RewardToken extends Component {

  render() {
    return (
      <View>
        <Image source={{uri: this.props.tokenUrl}} style={styles.image} />
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
