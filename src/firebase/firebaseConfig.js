import firebase from "@react-native-firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIVgiiqjsUywQMJNwj6_-GOHIGH3JkuuQ",
    authDomain: "dlf-time-meditation.firebaseapp.com",
    projectId: "dlf-time-meditation",
    storageBucket: "dlf-time-meditation.appspot.com",
    messagingSenderId: "758232867269",
    appId: "1:758232867269:web:ab70a6d9a6a50eefa22bac",
    measurementId: "G-VJ506KE45R",
    databaseURL: "",
};

const Firebase = () => {
    if (!firebase.apps.length) {
        return firebase.initializeApp(firebaseConfig);
    } else {
        return firebase.app();
    }
};
export default Firebase;