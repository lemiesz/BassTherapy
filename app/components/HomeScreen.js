import React, {Component, PropTypes} from 'react';
import {Button, View, TextInput, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';

const BUTTON_TEXT = "Start Here";
class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
  }

  componentDidMount() {
    this.navigation = this.props.navigation;
  }

  onClickHome = () => {
     this.navigation.navigate('TabContainer');
  }

  render() {
    return (
      <View style={styles.container}>
        <CardView style={styles.card}
          cardElevation={4}
          cardMaxElevation={4}
          cornerRadius={4}>
          <TextInput
            placeholder = "username..."
            style={styles.textInput}
            onChangeText={(userName) => this.setState({userName})}
            value={this.state.userName}
            />
            <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    width: 200,
                    opacity: .1
                  }}  />
          <TextInput
            placeholder = "password... "
            style={styles.textInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            />
          <Button title={BUTTON_TEXT} onPress={this.onClickHome}/>
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
    width: 200,
    height: 200,
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0
  }
})

export default HomeScreen;
