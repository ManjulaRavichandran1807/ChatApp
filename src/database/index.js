import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCvLHI_ty0esxZ6AC7l2wPnnEIKNuk97VA",
    authDomain: "chat-app-be43b.firebaseapp.com",
    projectId: "chat-app-be43b",
    storageBucket: "chat-app-be43b.appspot.com",
    messagingSenderId: "812103666956",
    appId: "1:812103666956:web:474c5a4489d54ce9070d29",
    measurementId: "G-C8ZVRNBLS5",
    databaseURL: "https://chat-mad-c7352-default-rtdb.firebaseio.com/",
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
