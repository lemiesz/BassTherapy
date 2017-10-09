var functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.randomNumber = functions.https.onRequest((req, res) => {

});
