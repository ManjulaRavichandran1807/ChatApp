import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCxgbhjJ8fOE_a7H-pLv79GXoOXhZAa4hs",
    authDomain: "chat-mad-c7352.firebaseapp.com",
    projectId: "chat-mad-c7352",
    databaseURL: "https://chat-mad-c7352-default-rtdb.firebaseio.com/",
    storageBucket: "chat-mad-c7352.appspot.com",
    messagingSenderId: "894992152562",
    appId: "1:894992152562:web:7ed6be29063297c2f6dd6b",
    measurementId: "G-C8ZVRNBLS5",
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
export default db;
import Validate from "./validate";
import Dashboard from "./dashboard";
const { checkUser, createUser, validateUser } = Validate(db);
const { getFriends, addFriends, message } = Dashboard(db);
export { checkUser, createUser, validateUser, getFriends, addFriends, message };
