import React, {Component, PropTypes} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Url from "../lib/url";

class MapView extends Component {

  constructor(props) {
    super(props);
    var size = encodeURI(props.width + "x" + props.height);
    var url = new Url("https://maps.googleapis.com/maps/api/staticmap")
              .withParam("key", encodeURI(props.apiKey))
              .withParam("center", encodeURI(props.center))
              .withParam("zoom", encodeURI(props.zoom))
              .withParam("size", size)
              .withParam("maptype", "roadmap")
              .build();
    this.state = {
      uri: url
    };

  }

  render() {
      return(
        <View>
            <Image style={{width: this.props.width, height: this.props.height}} source={{uri: this.state.uri}} />
        </View>
    )
  }

}

const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";

export default MapView;
