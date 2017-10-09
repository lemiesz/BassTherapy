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
