import * as firebase from 'firebase';
import Api from "../lib/api";
import _ from "underscore";

class TokenDefinitions {

  static getToken() {
    var tokens = firebase.database().ref('tokens/');
    return tokens.once('value').then((snapshot) => {
      var value = snapshot.val();
      if(!value) {
        return Promise.reject(new Error("Could not find any token definitions"));
      }
      var values = _.values(value);
      var token = _.sample(values, 1)[0];
      return Promise.resolve(token);
    });
  }

}

export default TokenDefinitions;
