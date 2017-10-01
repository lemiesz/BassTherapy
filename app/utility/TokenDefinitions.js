import * as firebase from 'firebase';
import Api from "../lib/api";
import _ from "underscore";

class TokenDefinitions {

  static getToken() {
    var data = Api.get("randomToken").then((data) => {
    }).catch((error) => {
        console.log(error);
    });
    var tokens = firebase.database().ref('tokens/');
    return tokens.once('value').then((snapshot) => {
      var values = _.values(snapshot.val());
      var token = _.sample(values, 1)[0];
      return Promise.resolve(token);
    });
  }

}

export default TokenDefinitions;
