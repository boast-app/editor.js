import firebase from "firebase/app"
import "firebase/storage";
import { firebaseConfig } from "./firebase.json"

firebase.initializeApp(firebaseConfig);

var storage_obj = firebase.storage();

export const storage = storage_obj;
export default firebase;