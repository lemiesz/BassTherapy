import React, {Component, PropTypes} from 'react';
import {Button} from 'react-native';

const BUTTON_TEXT = "Start Here";
class HomeScreen extends Component {

  componentDidMount() {
    this.navigation = this.props.navigation;
  }

  onClickHome = () => {
     this.navigation.navigate('CheckIn');
  }

  render() {
    return (
      <Button title={BUTTON_TEXT} onPress={this.onClickHome}/>
    )
  }

}

export default HomeScreen;
