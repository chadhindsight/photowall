import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCExTS0Av6zZiIpLC8kI3rF4akbRzi52VA",
    authDomain: "photowall-d0e21.firebaseapp.com",
    databaseURL: "https://photowall-d0e21.firebaseio.com",
    projectId: "photowall-d0e21",
    storageBucket: "photowall-d0e21.appspot.com",
    messagingSenderId: "999217955300"
};
firebase.initializeApp(config);
const database = firebase.database()

export {database};
//Declare action creators to use firebase. Instead of returning action object, they'll return a method to update database.
