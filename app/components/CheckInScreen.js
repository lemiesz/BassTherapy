import React, {Component, PropTypes} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import CardView from 'react-native-cardview'
import MapView from './MapView';
import * as firebase from 'firebase';

import Api from "../lib/api";

const lat_couch = 47.666379;
const long_couch = -122.356518;
const maxDistance = 100;

class CheckInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  // Uses haversine formula to give distance between to points in meters
  haversineDistance = (lat1, lon1, lat2, lon2) => {  // generally used geo measurement function
      var R = 6378.137; // Radius of earth in KM

      var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
      var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      return d * 1000; // meters
  }

  componentDidMount() {
   var currentCoords = firebase.database().ref('currentcoords/');
   currentCoords.on('value', (snapshot) => {
      var value = snapshot.val();
      this.setState({lat: value.lat, long: value.long});
    });
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var distance = this.haversineDistance(this.state.lat, this.state.long, position.coords.latitude, position.coords.longitude);
        var {navigate} = this.props.navigation;
        navigate("Reward");
        // this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
      },
      (failure) => {
        alert(failure)
        }
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <CardView
          style={styles.card}
          cardElevation={4}
          cardMaxElevation={4}
          cornerRadius={4}>
            <MapView {...mapParams} />
        </CardView>
        <CardView style={styles.card}
                  cardElevation={4}
                  cardMaxElevation={4}
                  cornerRadius={4}>
              <Button title="Check In" onPress={this.getLocation} />
       </CardView>
      </View>
    )
  }
}

const mapParams = {
  "center": "Stage nightclub",
  "zoom": "13",
  "height": 300,
  "width": 300,
  "apiKey": "AIzaSyArIQ-mCWJFUf7MEaAp9JLBni3KHpwJXKM",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  card:{
    backgroundColor: "white",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 25,
  },
  map: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

const mapurl = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyArIQ-mCWJFUf7MEaAp9JLBni3KHpwJXKM";

export default CheckInScreen;
